import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aye")
export default class AyeController {
  @operation({
    summary: "Get Aye",
  })
  @get()
  static getAye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aye",
  })
  @post("{id}")
  static createAye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
