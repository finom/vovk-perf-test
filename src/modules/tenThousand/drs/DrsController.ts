import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drs")
export default class DrsController {
  @operation({
    summary: "Get Drs",
  })
  @get()
  static getDrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drs",
  })
  @post("{id}")
  static createDrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
