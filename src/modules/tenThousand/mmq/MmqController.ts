import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmqs")
export default class MmqController {
  @operation({
    summary: "Get Mmqs",
  })
  @get()
  static getMmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmq",
  })
  @post("{id}")
  static createMmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
