import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqxes")
export default class DqxController {
  @operation({
    summary: "Get Dqxes",
  })
  @get()
  static getDqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqx",
  })
  @post("{id}")
  static createDqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
