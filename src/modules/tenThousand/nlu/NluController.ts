import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlus")
export default class NluController {
  @operation({
    summary: "Get Nlus",
  })
  @get()
  static getNlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlu",
  })
  @post("{id}")
  static createNlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
