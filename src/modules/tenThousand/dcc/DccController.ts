import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcc")
export default class DccController {
  @operation({
    summary: "Get Dcc",
  })
  @get()
  static getDcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcc",
  })
  @post("{id}")
  static createDcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
