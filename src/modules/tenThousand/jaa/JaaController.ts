import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaas")
export default class JaaController {
  @operation({
    summary: "Get Jaas",
  })
  @get()
  static getJaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaa",
  })
  @post("{id}")
  static createJaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
