import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maas")
export default class MaaController {
  @operation({
    summary: "Get Maas",
  })
  @get()
  static getMaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maa",
  })
  @post("{id}")
  static createMaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
