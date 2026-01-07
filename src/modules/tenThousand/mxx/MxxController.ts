import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxx")
export default class MxxController {
  @operation({
    summary: "Get Mxx",
  })
  @get()
  static getMxx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxx",
  })
  @post("{id}")
  static createMxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
