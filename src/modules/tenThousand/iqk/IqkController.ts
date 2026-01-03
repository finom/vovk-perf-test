import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqks")
export default class IqkController {
  @operation({
    summary: "Get Iqks",
  })
  @get()
  static getIqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqk",
  })
  @post("{id}")
  static createIqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
