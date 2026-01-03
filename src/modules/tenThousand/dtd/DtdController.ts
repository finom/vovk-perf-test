import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtds")
export default class DtdController {
  @operation({
    summary: "Get Dtds",
  })
  @get()
  static getDtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtd",
  })
  @post("{id}")
  static createDtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
