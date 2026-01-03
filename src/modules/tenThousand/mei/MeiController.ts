import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meis")
export default class MeiController {
  @operation({
    summary: "Get Meis",
  })
  @get()
  static getMeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mei",
  })
  @post("{id}")
  static createMei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
