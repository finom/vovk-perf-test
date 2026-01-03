import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqs")
export default class MqsController {
  @operation({
    summary: "Get Mqs",
  })
  @get()
  static getMqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqs",
  })
  @post("{id}")
  static createMqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
