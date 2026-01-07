import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ide")
export default class IdeController {
  @operation({
    summary: "Get Ide",
  })
  @get()
  static getIde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ide",
  })
  @post("{id}")
  static createIde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
