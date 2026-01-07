import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alv")
export default class AlvController {
  @operation({
    summary: "Get Alv",
  })
  @get()
  static getAlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alv",
  })
  @post("{id}")
  static createAlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
