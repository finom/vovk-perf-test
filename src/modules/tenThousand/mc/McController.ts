import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mc")
export default class McController {
  @operation({
    summary: "Get Mc",
  })
  @get()
  static getMc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mc",
  })
  @post("{id}")
  static createMc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
