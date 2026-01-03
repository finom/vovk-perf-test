import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mirs")
export default class MirController {
  @operation({
    summary: "Get Mirs",
  })
  @get()
  static getMirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mir",
  })
  @post("{id}")
  static createMir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
