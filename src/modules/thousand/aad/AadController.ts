import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aads")
export default class AadController {
  @operation({
    summary: "Get Aads",
  })
  @get()
  static getAads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aad",
  })
  @post("{id}")
  static createAad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
