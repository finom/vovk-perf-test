import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxa")
export default class CxaController {
  @operation({
    summary: "Get Cxa",
  })
  @get()
  static getCxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxa",
  })
  @post("{id}")
  static createCxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
