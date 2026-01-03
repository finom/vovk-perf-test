import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msvs")
export default class MsvController {
  @operation({
    summary: "Get Msvs",
  })
  @get()
  static getMsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msv",
  })
  @post("{id}")
  static createMsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
