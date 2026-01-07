import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdn")
export default class MdnController {
  @operation({
    summary: "Get Mdn",
  })
  @get()
  static getMdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdn",
  })
  @post("{id}")
  static createMdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
