import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzy")
export default class LzyController {
  @operation({
    summary: "Get Lzy",
  })
  @get()
  static getLzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzy",
  })
  @post("{id}")
  static createLzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
