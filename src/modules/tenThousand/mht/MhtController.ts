import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mht")
export default class MhtController {
  @operation({
    summary: "Get Mht",
  })
  @get()
  static getMht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mht",
  })
  @post("{id}")
  static createMht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
