import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcts")
export default class FctController {
  @operation({
    summary: "Get Fcts",
  })
  @get()
  static getFcts = procedure({
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
