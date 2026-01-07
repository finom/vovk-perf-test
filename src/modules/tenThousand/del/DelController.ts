import { procedure, prefix, get, post, operation } from "vovk";

@prefix("del")
export default class DelController {
  @operation({
    summary: "Get Del",
  })
  @get()
  static getDel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Del",
  })
  @post("{id}")
  static createDel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
