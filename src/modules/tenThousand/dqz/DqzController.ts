import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqzs")
export default class DqzController {
  @operation({
    summary: "Get Dqzs",
  })
  @get()
  static getDqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqz",
  })
  @post("{id}")
  static createDqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
