import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfcs")
export default class BfcController {
  @operation({
    summary: "Get Bfcs",
  })
  @get()
  static getBfcs = procedure({
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
