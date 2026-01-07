import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huw")
export default class HuwController {
  @operation({
    summary: "Get Huw",
  })
  @get()
  static getHuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huw",
  })
  @post("{id}")
  static createHuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
