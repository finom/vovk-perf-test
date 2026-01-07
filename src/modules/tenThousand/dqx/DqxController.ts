import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqx")
export default class DqxController {
  @operation({
    summary: "Get Dqx",
  })
  @get()
  static getDqx = procedure({
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
