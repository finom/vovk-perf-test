import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lefs")
export default class LefController {
  @operation({
    summary: "Get Lefs",
  })
  @get()
  static getLefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lef",
  })
  @post("{id}")
  static createLef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
