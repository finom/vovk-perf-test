import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fui")
export default class FuiController {
  @operation({
    summary: "Get Fui",
  })
  @get()
  static getFui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fui",
  })
  @post("{id}")
  static createFui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
