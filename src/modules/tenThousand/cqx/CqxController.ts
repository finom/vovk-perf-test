import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqxes")
export default class CqxController {
  @operation({
    summary: "Get Cqxes",
  })
  @get()
  static getCqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqx",
  })
  @post("{id}")
  static createCqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
