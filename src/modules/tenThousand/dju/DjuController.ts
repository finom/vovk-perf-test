import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djus")
export default class DjuController {
  @operation({
    summary: "Get Djus",
  })
  @get()
  static getDjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dju",
  })
  @post("{id}")
  static createDju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
