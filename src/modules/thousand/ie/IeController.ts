import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ie")
export default class IeController {
  @operation({
    summary: "Get Ie",
  })
  @get()
  static getIe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ie",
  })
  @post("{id}")
  static createIe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
