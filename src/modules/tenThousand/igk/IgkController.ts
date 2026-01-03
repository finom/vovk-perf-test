import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igks")
export default class IgkController {
  @operation({
    summary: "Get Igks",
  })
  @get()
  static getIgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igk",
  })
  @post("{id}")
  static createIgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
