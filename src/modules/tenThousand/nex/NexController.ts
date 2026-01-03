import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nexes")
export default class NexController {
  @operation({
    summary: "Get Nexes",
  })
  @get()
  static getNexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nex",
  })
  @post("{id}")
  static createNex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
