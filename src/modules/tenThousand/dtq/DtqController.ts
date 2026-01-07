import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtq")
export default class DtqController {
  @operation({
    summary: "Get Dtq",
  })
  @get()
  static getDtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtq",
  })
  @post("{id}")
  static createDtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
