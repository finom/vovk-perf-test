import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nks")
export default class NksController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nks",
  })
  @post("{id}")
  static createNks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
