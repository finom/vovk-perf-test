import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqms")
export default class IqmController {
  @operation({
    summary: "Get Iqms",
  })
  @get()
  static getIqms = procedure({
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
