import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uq")
export default class UqController {
  @operation({
    summary: "Get Uq",
  })
  @get()
  static getUq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uq",
  })
  @post("{id}")
  static createUq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
