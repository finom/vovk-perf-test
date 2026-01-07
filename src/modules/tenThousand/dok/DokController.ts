import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dok")
export default class DokController {
  @operation({
    summary: "Get Dok",
  })
  @get()
  static getDok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dok",
  })
  @post("{id}")
  static createDok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
