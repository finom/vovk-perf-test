import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjbs")
export default class HjbController {
  @operation({
    summary: "Get Hjbs",
  })
  @get()
  static getHjbs = procedure({
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
