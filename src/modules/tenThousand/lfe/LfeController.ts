import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfe")
export default class LfeController {
  @operation({
    summary: "Get Lfe",
  })
  @get()
  static getLfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfe",
  })
  @post("{id}")
  static createLfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
