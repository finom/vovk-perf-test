import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyqs")
export default class EyqController {
  @operation({
    summary: "Get Eyqs",
  })
  @get()
  static getEyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyq",
  })
  @post("{id}")
  static createEyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
