import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eads")
export default class EadController {
  @operation({
    summary: "Get Eads",
  })
  @get()
  static getEads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ead",
  })
  @post("{id}")
  static createEad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
