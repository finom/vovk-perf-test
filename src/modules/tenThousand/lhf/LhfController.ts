import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhfs")
export default class LhfController {
  @operation({
    summary: "Get Lhfs",
  })
  @get()
  static getLhfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhf",
  })
  @post("{id}")
  static createLhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
