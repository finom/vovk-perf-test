import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkf")
export default class NkfController {
  @operation({
    summary: "Get Nkf",
  })
  @get()
  static getNkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkf",
  })
  @post("{id}")
  static createNkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
