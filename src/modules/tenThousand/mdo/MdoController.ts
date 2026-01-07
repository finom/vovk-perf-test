import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdo")
export default class MdoController {
  @operation({
    summary: "Get Mdo",
  })
  @get()
  static getMdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdo",
  })
  @post("{id}")
  static createMdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
