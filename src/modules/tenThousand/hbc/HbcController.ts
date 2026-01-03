import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbcs")
export default class HbcController {
  @operation({
    summary: "Get Hbcs",
  })
  @get()
  static getHbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbc",
  })
  @post("{id}")
  static createHbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
