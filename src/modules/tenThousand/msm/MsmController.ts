import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msms")
export default class MsmController {
  @operation({
    summary: "Get Msms",
  })
  @get()
  static getMsms = procedure({
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
