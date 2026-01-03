import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhws")
export default class MhwController {
  @operation({
    summary: "Get Mhws",
  })
  @get()
  static getMhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhw",
  })
  @post("{id}")
  static createMhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
