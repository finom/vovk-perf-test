import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsr")
export default class DsrController {
  @operation({
    summary: "Get Dsr",
  })
  @get()
  static getDsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsr",
  })
  @post("{id}")
  static createDsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
