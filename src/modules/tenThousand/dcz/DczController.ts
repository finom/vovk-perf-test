import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcz")
export default class DczController {
  @operation({
    summary: "Get Dcz",
  })
  @get()
  static getDcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcz",
  })
  @post("{id}")
  static createDcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
