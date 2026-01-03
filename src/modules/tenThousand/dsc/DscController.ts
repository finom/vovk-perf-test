import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dscs")
export default class DscController {
  @operation({
    summary: "Get Dscs",
  })
  @get()
  static getDscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsc",
  })
  @post("{id}")
  static createDsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
