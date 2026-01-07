import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfa")
export default class JfaController {
  @operation({
    summary: "Get Jfa",
  })
  @get()
  static getJfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfa",
  })
  @post("{id}")
  static createJfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
