import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jui")
export default class JuiController {
  @operation({
    summary: "Get Jui",
  })
  @get()
  static getJui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jui",
  })
  @post("{id}")
  static createJui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
