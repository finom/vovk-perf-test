import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moks")
export default class MokController {
  @operation({
    summary: "Get Moks",
  })
  @get()
  static getMoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mok",
  })
  @post("{id}")
  static createMok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
