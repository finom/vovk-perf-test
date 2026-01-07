import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfc")
export default class BfcController {
  @operation({
    summary: "Get Bfc",
  })
  @get()
  static getBfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfc",
  })
  @post("{id}")
  static createBfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
