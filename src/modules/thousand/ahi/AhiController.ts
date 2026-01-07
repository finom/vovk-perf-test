import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahi")
export default class AhiController {
  @operation({
    summary: "Get Ahi",
  })
  @get()
  static getAhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahi",
  })
  @post("{id}")
  static createAhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
