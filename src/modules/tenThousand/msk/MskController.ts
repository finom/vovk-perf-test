import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msks")
export default class MskController {
  @operation({
    summary: "Get Msks",
  })
  @get()
  static getMsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msk",
  })
  @post("{id}")
  static createMsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
