import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alqs")
export default class AlqController {
  @operation({
    summary: "Get Alqs",
  })
  @get()
  static getAlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alq",
  })
  @post("{id}")
  static createAlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
