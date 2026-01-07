import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nme")
export default class NmeController {
  @operation({
    summary: "Get Nme",
  })
  @get()
  static getNme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nme",
  })
  @post("{id}")
  static createNme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
