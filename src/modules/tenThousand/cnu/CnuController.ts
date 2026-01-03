import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnus")
export default class CnuController {
  @operation({
    summary: "Get Cnus",
  })
  @get()
  static getCnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnu",
  })
  @post("{id}")
  static createCnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
