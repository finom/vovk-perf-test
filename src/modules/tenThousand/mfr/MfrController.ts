import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfrs")
export default class MfrController {
  @operation({
    summary: "Get Mfrs",
  })
  @get()
  static getMfrs = procedure({
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
