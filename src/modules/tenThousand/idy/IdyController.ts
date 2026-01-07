import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idy")
export default class IdyController {
  @operation({
    summary: "Get Idy",
  })
  @get()
  static getIdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idy",
  })
  @post("{id}")
  static createIdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
