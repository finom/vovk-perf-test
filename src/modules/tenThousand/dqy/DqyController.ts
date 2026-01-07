import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqy")
export default class DqyController {
  @operation({
    summary: "Get Dqy",
  })
  @get()
  static getDqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqy",
  })
  @post("{id}")
  static createDqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
