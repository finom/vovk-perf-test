import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnn")
export default class HnnController {
  @operation({
    summary: "Get Hnn",
  })
  @get()
  static getHnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnn",
  })
  @post("{id}")
  static createHnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
