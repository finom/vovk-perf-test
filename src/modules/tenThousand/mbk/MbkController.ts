import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbks")
export default class MbkController {
  @operation({
    summary: "Get Mbks",
  })
  @get()
  static getMbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbk",
  })
  @post("{id}")
  static createMbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
