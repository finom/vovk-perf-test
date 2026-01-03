import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcqs")
export default class LcqController {
  @operation({
    summary: "Get Lcqs",
  })
  @get()
  static getLcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcq",
  })
  @post("{id}")
  static createLcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
