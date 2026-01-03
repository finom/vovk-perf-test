import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcqs")
export default class FcqController {
  @operation({
    summary: "Get Fcqs",
  })
  @get()
  static getFcqs = procedure({
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
