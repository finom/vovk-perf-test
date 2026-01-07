import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rt")
export default class RtController {
  @operation({
    summary: "Get Rt",
  })
  @get()
  static getRt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rt",
  })
  @post("{id}")
  static createRt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
