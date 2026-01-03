import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dshes")
export default class DshController {
  @operation({
    summary: "Get Dshes",
  })
  @get()
  static getDshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsh",
  })
  @post("{id}")
  static createDsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
