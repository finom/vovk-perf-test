import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddm")
export default class DdmController {
  @operation({
    summary: "Get Ddm",
  })
  @get()
  static getDdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddm",
  })
  @post("{id}")
  static createDdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
