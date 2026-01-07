import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ou")
export default class OuController {
  @operation({
    summary: "Get Ou",
  })
  @get()
  static getOu = procedure({
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
