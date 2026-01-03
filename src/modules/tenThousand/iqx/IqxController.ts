import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqxes")
export default class IqxController {
  @operation({
    summary: "Get Iqxes",
  })
  @get()
  static getIqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqx",
  })
  @post("{id}")
  static createIqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
