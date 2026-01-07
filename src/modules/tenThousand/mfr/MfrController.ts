import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfr")
export default class MfrController {
  @operation({
    summary: "Get Mfr",
  })
  @get()
  static getMfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfr",
  })
  @post("{id}")
  static createMfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
