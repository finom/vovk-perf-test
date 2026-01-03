import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kais")
export default class KaiController {
  @operation({
    summary: "Get Kais",
  })
  @get()
  static getKais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kai",
  })
  @post("{id}")
  static createKai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
