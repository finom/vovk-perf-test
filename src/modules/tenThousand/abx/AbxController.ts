import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abxes")
export default class AbxController {
  @operation({
    summary: "Get Abxes",
  })
  @get()
  static getAbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abx",
  })
  @post("{id}")
  static createAbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
