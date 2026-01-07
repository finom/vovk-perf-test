import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nex")
export default class NexController {
  @operation({
    summary: "Get Nex",
  })
  @get()
  static getNex = procedure({
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
