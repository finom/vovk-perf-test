import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nafs")
export default class NafController {
  @operation({
    summary: "Get Nafs",
  })
  @get()
  static getNafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naf",
  })
  @post("{id}")
  static createNaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
