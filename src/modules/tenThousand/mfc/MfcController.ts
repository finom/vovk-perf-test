import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfc")
export default class MfcController {
  @operation({
    summary: "Get Mfc",
  })
  @get()
  static getMfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfc",
  })
  @post("{id}")
  static createMfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
