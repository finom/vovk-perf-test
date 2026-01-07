import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltu")
export default class LtuController {
  @operation({
    summary: "Get Ltu",
  })
  @get()
  static getLtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltu",
  })
  @post("{id}")
  static createLtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
