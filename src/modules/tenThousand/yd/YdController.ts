import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yd")
export default class YdController {
  @operation({
    summary: "Get Yd",
  })
  @get()
  static getYd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yd",
  })
  @post("{id}")
  static createYd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
