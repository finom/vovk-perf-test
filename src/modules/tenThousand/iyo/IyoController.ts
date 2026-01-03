import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyos")
export default class IyoController {
  @operation({
    summary: "Get Iyos",
  })
  @get()
  static getIyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyo",
  })
  @post("{id}")
  static createIyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
