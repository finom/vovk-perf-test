import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkf")
export default class LkfController {
  @operation({
    summary: "Get Lkf",
  })
  @get()
  static getLkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkf",
  })
  @post("{id}")
  static createLkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
