import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdm")
export default class FdmController {
  @operation({
    summary: "Get Fdm",
  })
  @get()
  static getFdm = procedure({
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
