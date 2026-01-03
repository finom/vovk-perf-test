import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muses")
export default class MusController {
  @operation({
    summary: "Get Muses",
  })
  @get()
  static getMuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mus",
  })
  @post("{id}")
  static createMus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
