import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mok")
export default class MokController {
  @operation({
    summary: "Get Mok",
  })
  @get()
  static getMok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mok",
  })
  @post("{id}")
  static createMok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
