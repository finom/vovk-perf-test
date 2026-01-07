import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhw")
export default class HhwController {
  @operation({
    summary: "Get Hhw",
  })
  @get()
  static getHhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhw",
  })
  @post("{id}")
  static createHhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
