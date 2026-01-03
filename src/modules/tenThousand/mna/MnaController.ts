import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnas")
export default class MnaController {
  @operation({
    summary: "Get Mnas",
  })
  @get()
  static getMnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mna",
  })
  @post("{id}")
  static createMna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
