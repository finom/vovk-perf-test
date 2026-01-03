import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcds")
export default class FcdController {
  @operation({
    summary: "Get Fcds",
  })
  @get()
  static getFcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcd",
  })
  @post("{id}")
  static createFcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
