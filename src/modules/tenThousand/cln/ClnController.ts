import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cln")
export default class ClnController {
  @operation({
    summary: "Get Cln",
  })
  @get()
  static getCln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cln",
  })
  @post("{id}")
  static createCln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
