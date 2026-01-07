import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfz")
export default class HfzController {
  @operation({
    summary: "Get Hfz",
  })
  @get()
  static getHfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfz",
  })
  @post("{id}")
  static createHfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
