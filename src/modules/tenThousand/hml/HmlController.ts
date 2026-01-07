import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hml")
export default class HmlController {
  @operation({
    summary: "Get Hml",
  })
  @get()
  static getHml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hml",
  })
  @post("{id}")
  static createHml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
