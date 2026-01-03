import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcbs")
export default class FcbController {
  @operation({
    summary: "Get Fcbs",
  })
  @get()
  static getFcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcb",
  })
  @post("{id}")
  static createFcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
