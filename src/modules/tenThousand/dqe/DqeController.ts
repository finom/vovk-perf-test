import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqes")
export default class DqeController {
  @operation({
    summary: "Get Dqes",
  })
  @get()
  static getDqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqe",
  })
  @post("{id}")
  static createDqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
