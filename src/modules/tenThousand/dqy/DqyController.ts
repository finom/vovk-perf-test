import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqies")
export default class DqyController {
  @operation({
    summary: "Get Dqies",
  })
  @get()
  static getDqies = procedure({
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
