import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njas")
export default class NjaController {
  @operation({
    summary: "Get Njas",
  })
  @get()
  static getNjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nja",
  })
  @post("{id}")
  static createNja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
