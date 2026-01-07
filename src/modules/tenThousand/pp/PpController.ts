import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pp")
export default class PpController {
  @operation({
    summary: "Get Pp",
  })
  @get()
  static getPp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pp",
  })
  @post("{id}")
  static createPp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
