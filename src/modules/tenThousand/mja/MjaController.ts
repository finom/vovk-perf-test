import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mja")
export default class MjaController {
  @operation({
    summary: "Get Mja",
  })
  @get()
  static getMja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mja",
  })
  @post("{id}")
  static createMja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
