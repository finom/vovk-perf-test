import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zms")
export default class ZmController {
  @operation({
    summary: "Get Zms",
  })
  @get()
  static getZms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zm",
  })
  @post("{id}")
  static createZm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
