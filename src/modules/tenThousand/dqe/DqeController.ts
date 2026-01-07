import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqe")
export default class DqeController {
  @operation({
    summary: "Get Dqe",
  })
  @get()
  static getDqe = procedure({
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
