import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lufs")
export default class LufController {
  @operation({
    summary: "Get Lufs",
  })
  @get()
  static getLufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luf",
  })
  @post("{id}")
  static createLuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
