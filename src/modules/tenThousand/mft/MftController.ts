import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mft")
export default class MftController {
  @operation({
    summary: "Get Mft",
  })
  @get()
  static getMft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mft",
  })
  @post("{id}")
  static createMft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
