import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jta")
export default class JtaController {
  @operation({
    summary: "Get Jta",
  })
  @get()
  static getJta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jta",
  })
  @post("{id}")
  static createJta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
