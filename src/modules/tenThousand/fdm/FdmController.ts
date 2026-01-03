import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdms")
export default class FdmController {
  @operation({
    summary: "Get Fdms",
  })
  @get()
  static getFdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdm",
  })
  @post("{id}")
  static createFdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
