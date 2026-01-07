import { procedure, prefix, get, post, operation } from "vovk";

@prefix("her")
export default class HerController {
  @operation({
    summary: "Get Her",
  })
  @get()
  static getHer = procedure({
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
