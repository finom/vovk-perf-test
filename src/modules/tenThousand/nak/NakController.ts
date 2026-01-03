import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naks")
export default class NakController {
  @operation({
    summary: "Get Naks",
  })
  @get()
  static getNaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nak",
  })
  @post("{id}")
  static createNak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
