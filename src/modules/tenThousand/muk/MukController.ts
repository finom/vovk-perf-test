import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muk")
export default class MukController {
  @operation({
    summary: "Get Muk",
  })
  @get()
  static getMuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muk",
  })
  @post("{id}")
  static createMuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
