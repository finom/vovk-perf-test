import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzj")
export default class HzjController {
  @operation({
    summary: "Get Hzj",
  })
  @get()
  static getHzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzj",
  })
  @post("{id}")
  static createHzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
