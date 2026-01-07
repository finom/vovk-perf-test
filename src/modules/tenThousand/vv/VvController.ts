import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vv")
export default class VvController {
  @operation({
    summary: "Get Vv",
  })
  @get()
  static getVv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vv",
  })
  @post("{id}")
  static createVv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
