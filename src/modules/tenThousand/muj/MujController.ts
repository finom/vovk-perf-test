import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mujs")
export default class MujController {
  @operation({
    summary: "Get Mujs",
  })
  @get()
  static getMujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muj",
  })
  @post("{id}")
  static createMuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
