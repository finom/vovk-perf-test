import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uu")
export default class UuController {
  @operation({
    summary: "Get Uu",
  })
  @get()
  static getUu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uu",
  })
  @post("{id}")
  static createUu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
