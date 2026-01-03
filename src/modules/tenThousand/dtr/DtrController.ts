import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtrs")
export default class DtrController {
  @operation({
    summary: "Get Dtrs",
  })
  @get()
  static getDtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtr",
  })
  @post("{id}")
  static createDtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
