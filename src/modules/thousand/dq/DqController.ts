import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dq")
export default class DqController {
  @operation({
    summary: "Get Dq",
  })
  @get()
  static getDq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dq",
  })
  @post("{id}")
  static createDq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
