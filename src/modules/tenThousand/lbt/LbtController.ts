import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbts")
export default class LbtController {
  @operation({
    summary: "Get Lbts",
  })
  @get()
  static getLbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbt",
  })
  @post("{id}")
  static createLbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
