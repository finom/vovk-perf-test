import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mojs")
export default class MojController {
  @operation({
    summary: "Get Mojs",
  })
  @get()
  static getMojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moj",
  })
  @post("{id}")
  static createMoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
