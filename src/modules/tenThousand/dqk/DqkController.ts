import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqk")
export default class DqkController {
  @operation({
    summary: "Get Dqk",
  })
  @get()
  static getDqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqk",
  })
  @post("{id}")
  static createDqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
