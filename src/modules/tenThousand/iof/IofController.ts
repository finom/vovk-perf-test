import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iofs")
export default class IofController {
  @operation({
    summary: "Get Iofs",
  })
  @get()
  static getIofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iof",
  })
  @post("{id}")
  static createIof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
