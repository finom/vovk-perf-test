import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbts")
export default class BbtController {
  @operation({
    summary: "Get Bbts",
  })
  @get()
  static getBbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbt",
  })
  @post("{id}")
  static createBbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
