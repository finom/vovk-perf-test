import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlus")
export default class DluController {
  @operation({
    summary: "Get Dlus",
  })
  @get()
  static getDlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlu",
  })
  @post("{id}")
  static createDlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
