import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddms")
export default class DdmController {
  @operation({
    summary: "Get Ddms",
  })
  @get()
  static getDdms = procedure({
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
