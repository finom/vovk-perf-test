import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmqs")
export default class LmqController {
  @operation({
    summary: "Get Lmqs",
  })
  @get()
  static getLmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmq",
  })
  @post("{id}")
  static createLmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
