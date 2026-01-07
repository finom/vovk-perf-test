import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdt")
export default class MdtController {
  @operation({
    summary: "Get Mdt",
  })
  @get()
  static getMdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdt",
  })
  @post("{id}")
  static createMdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
