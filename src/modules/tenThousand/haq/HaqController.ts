import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haqs")
export default class HaqController {
  @operation({
    summary: "Get Haqs",
  })
  @get()
  static getHaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haq",
  })
  @post("{id}")
  static createHaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
