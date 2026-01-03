import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfhs")
export default class HfhController {
  @operation({
    summary: "Get Hfhs",
  })
  @get()
  static getHfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfh",
  })
  @post("{id}")
  static createHfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
