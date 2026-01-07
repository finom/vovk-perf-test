import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjb")
export default class HjbController {
  @operation({
    summary: "Get Hjb",
  })
  @get()
  static getHjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjb",
  })
  @post("{id}")
  static createHjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
