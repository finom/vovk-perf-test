import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmrs")
export default class DmrController {
  @operation({
    summary: "Get Dmrs",
  })
  @get()
  static getDmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmr",
  })
  @post("{id}")
  static createDmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
