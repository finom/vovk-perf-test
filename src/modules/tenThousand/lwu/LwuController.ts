import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwu")
export default class LwuController {
  @operation({
    summary: "Get Lwu",
  })
  @get()
  static getLwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwu",
  })
  @post("{id}")
  static createLwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
