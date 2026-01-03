import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwts")
export default class MwtController {
  @operation({
    summary: "Get Mwts",
  })
  @get()
  static getMwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwt",
  })
  @post("{id}")
  static createMwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
