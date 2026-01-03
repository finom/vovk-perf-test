import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqzs")
export default class IqzController {
  @operation({
    summary: "Get Iqzs",
  })
  @get()
  static getIqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqz",
  })
  @post("{id}")
  static createIqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
