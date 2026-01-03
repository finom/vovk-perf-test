import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akks")
export default class AkkController {
  @operation({
    summary: "Get Akks",
  })
  @get()
  static getAkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akk",
  })
  @post("{id}")
  static createAkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
