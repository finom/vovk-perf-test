import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rts")
export default class RtController {
  @operation({
    summary: "Get Rts",
  })
  @get()
  static getRts = procedure({
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
