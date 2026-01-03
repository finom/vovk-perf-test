import { procedure, prefix, get, post, operation } from "vovk";

@prefix("advs")
export default class AdvController {
  @operation({
    summary: "Get Advs",
  })
  @get()
  static getAdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adv",
  })
  @post("{id}")
  static createAdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
