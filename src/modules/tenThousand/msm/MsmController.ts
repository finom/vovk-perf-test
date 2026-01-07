import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msm")
export default class MsmController {
  @operation({
    summary: "Get Msm",
  })
  @get()
  static getMsm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msm",
  })
  @post("{id}")
  static createMsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
