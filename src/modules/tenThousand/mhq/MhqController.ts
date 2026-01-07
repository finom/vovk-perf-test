import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhq")
export default class MhqController {
  @operation({
    summary: "Get Mhq",
  })
  @get()
  static getMhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhq",
  })
  @post("{id}")
  static createMhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
