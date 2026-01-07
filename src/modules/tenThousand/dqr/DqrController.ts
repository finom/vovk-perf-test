import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqr")
export default class DqrController {
  @operation({
    summary: "Get Dqr",
  })
  @get()
  static getDqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqr",
  })
  @post("{id}")
  static createDqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
