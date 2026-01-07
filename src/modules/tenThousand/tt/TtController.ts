import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tt")
export default class TtController {
  @operation({
    summary: "Get Tt",
  })
  @get()
  static getTt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tt",
  })
  @post("{id}")
  static createTt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
