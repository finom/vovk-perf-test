import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdzs")
export default class MdzController {
  @operation({
    summary: "Get Mdzs",
  })
  @get()
  static getMdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdz",
  })
  @post("{id}")
  static createMdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
