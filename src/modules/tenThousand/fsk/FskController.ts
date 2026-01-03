import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsks")
export default class FskController {
  @operation({
    summary: "Get Fsks",
  })
  @get()
  static getFsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsk",
  })
  @post("{id}")
  static createFsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
