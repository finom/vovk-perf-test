import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqw")
export default class IqwController {
  @operation({
    summary: "Get Iqw",
  })
  @get()
  static getIqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqw",
  })
  @post("{id}")
  static createIqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
