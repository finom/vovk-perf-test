import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikf")
export default class IkfController {
  @operation({
    summary: "Get Ikf",
  })
  @get()
  static getIkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikf",
  })
  @post("{id}")
  static createIkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
