import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhrs")
export default class NhrController {
  @operation({
    summary: "Get Nhrs",
  })
  @get()
  static getNhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhr",
  })
  @post("{id}")
  static createNhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
