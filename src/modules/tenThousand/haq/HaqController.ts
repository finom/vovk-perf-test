import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haq")
export default class HaqController {
  @operation({
    summary: "Get Haq",
  })
  @get()
  static getHaq = procedure({
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
