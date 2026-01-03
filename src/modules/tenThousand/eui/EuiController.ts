import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euis")
export default class EuiController {
  @operation({
    summary: "Get Euis",
  })
  @get()
  static getEuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eui",
  })
  @post("{id}")
  static createEui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
