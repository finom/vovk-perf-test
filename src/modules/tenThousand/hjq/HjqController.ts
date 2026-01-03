import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjqs")
export default class HjqController {
  @operation({
    summary: "Get Hjqs",
  })
  @get()
  static getHjqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjq",
  })
  @post("{id}")
  static createHjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
