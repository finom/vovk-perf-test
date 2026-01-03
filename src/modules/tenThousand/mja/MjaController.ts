import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjas")
export default class MjaController {
  @operation({
    summary: "Get Mjas",
  })
  @get()
  static getMjas = procedure({
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
