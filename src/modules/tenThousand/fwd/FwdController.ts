import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwds")
export default class FwdController {
  @operation({
    summary: "Get Fwds",
  })
  @get()
  static getFwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwd",
  })
  @post("{id}")
  static createFwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
