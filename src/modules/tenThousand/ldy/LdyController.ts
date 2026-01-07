import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldy")
export default class LdyController {
  @operation({
    summary: "Get Ldy",
  })
  @get()
  static getLdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldy",
  })
  @post("{id}")
  static createLdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
