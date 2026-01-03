import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbis")
export default class MbiController {
  @operation({
    summary: "Get Mbis",
  })
  @get()
  static getMbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbi",
  })
  @post("{id}")
  static createMbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
