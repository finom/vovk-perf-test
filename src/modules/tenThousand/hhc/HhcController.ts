import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhc")
export default class HhcController {
  @operation({
    summary: "Get Hhc",
  })
  @get()
  static getHhc = procedure({
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
