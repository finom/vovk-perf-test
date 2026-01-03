import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmqs")
export default class HmqController {
  @operation({
    summary: "Get Hmqs",
  })
  @get()
  static getHmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmq",
  })
  @post("{id}")
  static createHmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
