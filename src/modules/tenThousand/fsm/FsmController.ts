import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsms")
export default class FsmController {
  @operation({
    summary: "Get Fsms",
  })
  @get()
  static getFsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsm",
  })
  @post("{id}")
  static createFsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
