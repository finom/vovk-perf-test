import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlas")
export default class HlaController {
  @operation({
    summary: "Get Hlas",
  })
  @get()
  static getHlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hla",
  })
  @post("{id}")
  static createHla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
