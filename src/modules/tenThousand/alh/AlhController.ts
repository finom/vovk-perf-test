import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alh")
export default class AlhController {
  @operation({
    summary: "Get Alh",
  })
  @get()
  static getAlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alh",
  })
  @post("{id}")
  static createAlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
