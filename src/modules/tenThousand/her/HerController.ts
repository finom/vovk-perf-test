import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hers")
export default class HerController {
  @operation({
    summary: "Get Hers",
  })
  @get()
  static getHers = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Her",
  })
  @post("{id}")
  static createHer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
