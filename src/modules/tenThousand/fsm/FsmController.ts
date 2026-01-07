import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsm")
export default class FsmController {
  @operation({
    summary: "Get Fsm",
  })
  @get()
  static getFsm = procedure({
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
