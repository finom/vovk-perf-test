import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dop")
export default class DopController {
  @operation({
    summary: "Get Dop",
  })
  @get()
  static getDop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dop",
  })
  @post("{id}")
  static createDop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
