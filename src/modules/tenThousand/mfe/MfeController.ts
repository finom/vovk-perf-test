import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfes")
export default class MfeController {
  @operation({
    summary: "Get Mfes",
  })
  @get()
  static getMfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfe",
  })
  @post("{id}")
  static createMfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
