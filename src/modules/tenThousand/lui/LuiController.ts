import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lui")
export default class LuiController {
  @operation({
    summary: "Get Lui",
  })
  @get()
  static getLui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lui",
  })
  @post("{id}")
  static createLui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
