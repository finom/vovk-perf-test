import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iga")
export default class IgaController {
  @operation({
    summary: "Get Iga",
  })
  @get()
  static getIga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iga",
  })
  @post("{id}")
  static createIga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
