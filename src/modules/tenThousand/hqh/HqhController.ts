import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqhs")
export default class HqhController {
  @operation({
    summary: "Get Hqhs",
  })
  @get()
  static getHqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqh",
  })
  @post("{id}")
  static createHqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
