import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivz")
export default class IvzController {
  @operation({
    summary: "Get Ivz",
  })
  @get()
  static getIvz = procedure({
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
