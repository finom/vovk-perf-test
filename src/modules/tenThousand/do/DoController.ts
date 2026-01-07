import { procedure, prefix, get, post, operation } from "vovk";

@prefix("do")
export default class DoController {
  @operation({
    summary: "Get Do",
  })
  @get()
  static getDo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Do",
  })
  @post("{id}")
  static createDo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
