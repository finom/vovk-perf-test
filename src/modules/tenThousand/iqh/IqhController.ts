import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqh")
export default class IqhController {
  @operation({
    summary: "Get Iqh",
  })
  @get()
  static getIqh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqh",
  })
  @post("{id}")
  static createIqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
