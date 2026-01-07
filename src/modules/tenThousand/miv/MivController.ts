import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miv")
export default class MivController {
  @operation({
    summary: "Get Miv",
  })
  @get()
  static getMiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miv",
  })
  @post("{id}")
  static createMiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
