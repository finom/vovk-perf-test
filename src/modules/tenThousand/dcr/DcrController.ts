import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcrs")
export default class DcrController {
  @operation({
    summary: "Get Dcrs",
  })
  @get()
  static getDcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcr",
  })
  @post("{id}")
  static createDcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
