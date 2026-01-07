import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lef")
export default class LefController {
  @operation({
    summary: "Get Lef",
  })
  @get()
  static getLef = procedure({
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
