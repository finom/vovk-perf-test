import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivhs")
export default class IvhController {
  @operation({
    summary: "Get Ivhs",
  })
  @get()
  static getIvhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivh",
  })
  @post("{id}")
  static createIvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
