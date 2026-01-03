import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikts")
export default class IktController {
  @operation({
    summary: "Get Ikts",
  })
  @get()
  static getIkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikt",
  })
  @post("{id}")
  static createIkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
