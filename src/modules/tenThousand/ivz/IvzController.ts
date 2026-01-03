import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivzs")
export default class IvzController {
  @operation({
    summary: "Get Ivzs",
  })
  @get()
  static getIvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivz",
  })
  @post("{id}")
  static createIvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
