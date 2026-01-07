import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fct")
export default class FctController {
  @operation({
    summary: "Get Fct",
  })
  @get()
  static getFct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fct",
  })
  @post("{id}")
  static createFct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
