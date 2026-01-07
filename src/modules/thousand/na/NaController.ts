import { procedure, prefix, get, post, operation } from "vovk";

@prefix("na")
export default class NaController {
  @operation({
    summary: "Get Na",
  })
  @get()
  static getNa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Na",
  })
  @post("{id}")
  static createNa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
