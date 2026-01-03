import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdos")
export default class MdoController {
  @operation({
    summary: "Get Mdos",
  })
  @get()
  static getMdos = procedure({
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
