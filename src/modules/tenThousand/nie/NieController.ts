import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nie")
export default class NieController {
  @operation({
    summary: "Get Nie",
  })
  @get()
  static getNie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nie",
  })
  @post("{id}")
  static createNie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
