import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqm")
export default class IqmController {
  @operation({
    summary: "Get Iqm",
  })
  @get()
  static getIqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqm",
  })
  @post("{id}")
  static createIqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
