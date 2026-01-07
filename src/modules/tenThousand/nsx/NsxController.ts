import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsx")
export default class NsxController {
  @operation({
    summary: "Get Nsx",
  })
  @get()
  static getNsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsx",
  })
  @post("{id}")
  static createNsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
