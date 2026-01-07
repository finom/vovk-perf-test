import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tg")
export default class TgController {
  @operation({
    summary: "Get Tg",
  })
  @get()
  static getTg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tg",
  })
  @post("{id}")
  static createTg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
