import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyzs")
export default class LyzController {
  @operation({
    summary: "Get Lyzs",
  })
  @get()
  static getLyzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyz",
  })
  @post("{id}")
  static createLyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
