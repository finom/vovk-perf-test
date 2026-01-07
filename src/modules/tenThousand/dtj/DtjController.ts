import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtj")
export default class DtjController {
  @operation({
    summary: "Get Dtj",
  })
  @get()
  static getDtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtj",
  })
  @post("{id}")
  static createDtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
