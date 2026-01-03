import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amls")
export default class AmlController {
  @operation({
    summary: "Get Amls",
  })
  @get()
  static getAmls = procedure({
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
