import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijhs")
export default class IjhController {
  @operation({
    summary: "Get Ijhs",
  })
  @get()
  static getIjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijh",
  })
  @post("{id}")
  static createIjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
