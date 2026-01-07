import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mit")
export default class MitController {
  @operation({
    summary: "Get Mit",
  })
  @get()
  static getMit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mit",
  })
  @post("{id}")
  static createMit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
