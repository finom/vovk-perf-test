import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmns")
export default class MmnController {
  @operation({
    summary: "Get Mmns",
  })
  @get()
  static getMmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmn",
  })
  @post("{id}")
  static createMmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
