import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqd")
export default class IqdController {
  @operation({
    summary: "Get Iqd",
  })
  @get()
  static getIqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqd",
  })
  @post("{id}")
  static createIqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
