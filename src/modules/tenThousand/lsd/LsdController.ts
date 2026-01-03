import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsds")
export default class LsdController {
  @operation({
    summary: "Get Lsds",
  })
  @get()
  static getLsds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsd",
  })
  @post("{id}")
  static createLsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
