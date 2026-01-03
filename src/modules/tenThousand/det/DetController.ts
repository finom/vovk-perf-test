import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dets")
export default class DetController {
  @operation({
    summary: "Get Dets",
  })
  @get()
  static getDets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Det",
  })
  @post("{id}")
  static createDet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
