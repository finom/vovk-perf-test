import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aml")
export default class AmlController {
  @operation({
    summary: "Get Aml",
  })
  @get()
  static getAml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aml",
  })
  @post("{id}")
  static createAml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
