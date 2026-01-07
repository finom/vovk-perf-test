import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwq")
export default class LwqController {
  @operation({
    summary: "Get Lwq",
  })
  @get()
  static getLwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwq",
  })
  @post("{id}")
  static createLwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
