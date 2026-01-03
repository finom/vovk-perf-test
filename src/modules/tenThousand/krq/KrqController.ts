import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krqs")
export default class KrqController {
  @operation({
    summary: "Get Krqs",
  })
  @get()
  static getKrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krq",
  })
  @post("{id}")
  static createKrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
