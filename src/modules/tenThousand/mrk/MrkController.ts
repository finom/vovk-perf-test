import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrks")
export default class MrkController {
  @operation({
    summary: "Get Mrks",
  })
  @get()
  static getMrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrk",
  })
  @post("{id}")
  static createMrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
