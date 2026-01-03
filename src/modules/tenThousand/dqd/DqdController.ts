import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqds")
export default class DqdController {
  @operation({
    summary: "Get Dqds",
  })
  @get()
  static getDqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqd",
  })
  @post("{id}")
  static createDqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
