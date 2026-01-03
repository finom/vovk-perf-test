import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etts")
export default class EttController {
  @operation({
    summary: "Get Etts",
  })
  @get()
  static getEtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ett",
  })
  @post("{id}")
  static createEtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
