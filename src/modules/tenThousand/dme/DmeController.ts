import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmes")
export default class DmeController {
  @operation({
    summary: "Get Dmes",
  })
  @get()
  static getDmes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dme",
  })
  @post("{id}")
  static createDme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
