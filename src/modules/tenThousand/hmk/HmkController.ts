import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmks")
export default class HmkController {
  @operation({
    summary: "Get Hmks",
  })
  @get()
  static getHmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmk",
  })
  @post("{id}")
  static createHmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
