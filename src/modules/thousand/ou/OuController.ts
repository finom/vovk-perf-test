import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ous")
export default class OuController {
  @operation({
    summary: "Get Ous",
  })
  @get()
  static getOus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ou",
  })
  @post("{id}")
  static createOu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
