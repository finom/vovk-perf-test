import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fil")
export default class FilController {
  @operation({
    summary: "Get Fil",
  })
  @get()
  static getFil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fil",
  })
  @post("{id}")
  static createFil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
