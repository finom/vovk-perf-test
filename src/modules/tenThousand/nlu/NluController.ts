import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlu")
export default class NluController {
  @operation({
    summary: "Get Nlu",
  })
  @get()
  static getNlu = procedure({
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
