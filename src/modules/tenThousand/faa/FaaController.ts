import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faas")
export default class FaaController {
  @operation({
    summary: "Get Faas",
  })
  @get()
  static getFaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faa",
  })
  @post("{id}")
  static createFaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
