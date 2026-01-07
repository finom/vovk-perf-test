import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxa")
export default class JxaController {
  @operation({
    summary: "Get Jxa",
  })
  @get()
  static getJxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxa",
  })
  @post("{id}")
  static createJxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
