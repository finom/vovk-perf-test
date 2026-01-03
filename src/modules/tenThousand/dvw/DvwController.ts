import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvws")
export default class DvwController {
  @operation({
    summary: "Get Dvws",
  })
  @get()
  static getDvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvw",
  })
  @post("{id}")
  static createDvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
