import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjh")
export default class HjhController {
  @operation({
    summary: "Get Hjh",
  })
  @get()
  static getHjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjh",
  })
  @post("{id}")
  static createHjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
