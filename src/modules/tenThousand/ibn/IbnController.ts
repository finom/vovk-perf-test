import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibns")
export default class IbnController {
  @operation({
    summary: "Get Ibns",
  })
  @get()
  static getIbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibn",
  })
  @post("{id}")
  static createIbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
