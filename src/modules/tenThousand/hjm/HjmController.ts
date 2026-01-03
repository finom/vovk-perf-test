import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjms")
export default class HjmController {
  @operation({
    summary: "Get Hjms",
  })
  @get()
  static getHjms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjm",
  })
  @post("{id}")
  static createHjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
