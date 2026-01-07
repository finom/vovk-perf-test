import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqv")
export default class IqvController {
  @operation({
    summary: "Get Iqv",
  })
  @get()
  static getIqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqv",
  })
  @post("{id}")
  static createIqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
