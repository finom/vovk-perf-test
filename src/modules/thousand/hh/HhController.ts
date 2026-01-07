import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hh")
export default class HhController {
  @operation({
    summary: "Get Hh",
  })
  @get()
  static getHh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hh",
  })
  @post("{id}")
  static createHh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
