import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krq")
export default class KrqController {
  @operation({
    summary: "Get Krq",
  })
  @get()
  static getKrq = procedure({
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
