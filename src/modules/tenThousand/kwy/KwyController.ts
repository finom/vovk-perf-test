import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwy")
export default class KwyController {
  @operation({
    summary: "Get Kwy",
  })
  @get()
  static getKwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwy",
  })
  @post("{id}")
  static createKwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
