import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daas")
export default class DaaController {
  @operation({
    summary: "Get Daas",
  })
  @get()
  static getDaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daa",
  })
  @post("{id}")
  static createDaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
