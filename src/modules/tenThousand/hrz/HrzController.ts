import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrzs")
export default class HrzController {
  @operation({
    summary: "Get Hrzs",
  })
  @get()
  static getHrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrz",
  })
  @post("{id}")
  static createHrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
