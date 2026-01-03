import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhcs")
export default class HhcController {
  @operation({
    summary: "Get Hhcs",
  })
  @get()
  static getHhcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhc",
  })
  @post("{id}")
  static createHhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
