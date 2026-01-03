import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqqs")
export default class NqqController {
  @operation({
    summary: "Get Nqqs",
  })
  @get()
  static getNqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqq",
  })
  @post("{id}")
  static createNqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
