import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmqs")
export default class FmqController {
  @operation({
    summary: "Get Fmqs",
  })
  @get()
  static getFmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmq",
  })
  @post("{id}")
  static createFmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
