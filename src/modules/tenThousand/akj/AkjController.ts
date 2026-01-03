import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akjs")
export default class AkjController {
  @operation({
    summary: "Get Akjs",
  })
  @get()
  static getAkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akj",
  })
  @post("{id}")
  static createAkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
