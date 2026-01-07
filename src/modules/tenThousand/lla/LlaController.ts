import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lla")
export default class LlaController {
  @operation({
    summary: "Get Lla",
  })
  @get()
  static getLla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lla",
  })
  @post("{id}")
  static createLla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
