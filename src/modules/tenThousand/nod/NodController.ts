import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nods")
export default class NodController {
  @operation({
    summary: "Get Nods",
  })
  @get()
  static getNods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nod",
  })
  @post("{id}")
  static createNod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
