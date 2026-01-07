import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nod")
export default class NodController {
  @operation({
    summary: "Get Nod",
  })
  @get()
  static getNod = procedure({
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
