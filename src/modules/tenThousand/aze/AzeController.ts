import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azes")
export default class AzeController {
  @operation({
    summary: "Get Azes",
  })
  @get()
  static getAzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aze",
  })
  @post("{id}")
  static createAze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
