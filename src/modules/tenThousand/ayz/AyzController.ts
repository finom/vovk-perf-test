import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayzs")
export default class AyzController {
  @operation({
    summary: "Get Ayzs",
  })
  @get()
  static getAyzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayz",
  })
  @post("{id}")
  static createAyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
