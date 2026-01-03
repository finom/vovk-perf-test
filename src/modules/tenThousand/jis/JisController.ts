import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jis")
export default class JisController {
  @operation({
    summary: "Get Jis",
  })
  @get()
  static getJis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jis",
  })
  @post("{id}")
  static createJis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
