import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmns")
export default class NmnController {
  @operation({
    summary: "Get Nmns",
  })
  @get()
  static getNmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmn",
  })
  @post("{id}")
  static createNmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
