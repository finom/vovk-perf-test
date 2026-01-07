import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhq")
export default class HhqController {
  @operation({
    summary: "Get Hhq",
  })
  @get()
  static getHhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhq",
  })
  @post("{id}")
  static createHhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
