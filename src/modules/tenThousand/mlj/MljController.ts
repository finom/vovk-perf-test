import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mljs")
export default class MljController {
  @operation({
    summary: "Get Mljs",
  })
  @get()
  static getMljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlj",
  })
  @post("{id}")
  static createMlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
