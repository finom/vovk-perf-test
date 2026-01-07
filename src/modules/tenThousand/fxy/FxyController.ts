import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxy")
export default class FxyController {
  @operation({
    summary: "Get Fxy",
  })
  @get()
  static getFxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxy",
  })
  @post("{id}")
  static createFxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
