import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maj")
export default class MajController {
  @operation({
    summary: "Get Maj",
  })
  @get()
  static getMaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maj",
  })
  @post("{id}")
  static createMaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
