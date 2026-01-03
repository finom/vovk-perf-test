import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvts")
export default class HvtController {
  @operation({
    summary: "Get Hvts",
  })
  @get()
  static getHvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvt",
  })
  @post("{id}")
  static createHvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
