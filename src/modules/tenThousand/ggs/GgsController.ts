import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggs")
export default class GgsController {
  @operation({
    summary: "Get Ggs",
  })
  @get()
  static getGgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggs",
  })
  @post("{id}")
  static createGgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
