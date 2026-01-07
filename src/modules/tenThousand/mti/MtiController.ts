import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mti")
export default class MtiController {
  @operation({
    summary: "Get Mti",
  })
  @get()
  static getMti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mti",
  })
  @post("{id}")
  static createMti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
