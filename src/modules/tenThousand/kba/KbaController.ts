import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbas")
export default class KbaController {
  @operation({
    summary: "Get Kbas",
  })
  @get()
  static getKbas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kba",
  })
  @post("{id}")
  static createKba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
