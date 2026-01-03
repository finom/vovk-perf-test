import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqhs")
export default class IqhController {
  @operation({
    summary: "Get Iqhs",
  })
  @get()
  static getIqhs = procedure({
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
