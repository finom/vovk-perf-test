import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sns")
export default class SnController {
  @operation({
    summary: "Get Sns",
  })
  @get()
  static getSns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sn",
  })
  @post("{id}")
  static createSn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
