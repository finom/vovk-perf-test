import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxn")
export default class MxnController {
  @operation({
    summary: "Get Mxn",
  })
  @get()
  static getMxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxn",
  })
  @post("{id}")
  static createMxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
