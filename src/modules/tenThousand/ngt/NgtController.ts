import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngt")
export default class NgtController {
  @operation({
    summary: "Get Ngt",
  })
  @get()
  static getNgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngt",
  })
  @post("{id}")
  static createNgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
