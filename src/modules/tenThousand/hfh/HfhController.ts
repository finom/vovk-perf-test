import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfh")
export default class HfhController {
  @operation({
    summary: "Get Hfh",
  })
  @get()
  static getHfh = procedure({
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
