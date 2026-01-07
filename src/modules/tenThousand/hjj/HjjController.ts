import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjj")
export default class HjjController {
  @operation({
    summary: "Get Hjj",
  })
  @get()
  static getHjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjj",
  })
  @post("{id}")
  static createHjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
