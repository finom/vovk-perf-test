import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uy")
export default class UyController {
  @operation({
    summary: "Get Uy",
  })
  @get()
  static getUy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uy",
  })
  @post("{id}")
  static createUy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
