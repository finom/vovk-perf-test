import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjt")
export default class MjtController {
  @operation({
    summary: "Get Mjt",
  })
  @get()
  static getMjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjt",
  })
  @post("{id}")
  static createMjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
