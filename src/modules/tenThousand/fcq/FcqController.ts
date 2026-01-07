import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcq")
export default class FcqController {
  @operation({
    summary: "Get Fcq",
  })
  @get()
  static getFcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcq",
  })
  @post("{id}")
  static createFcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
