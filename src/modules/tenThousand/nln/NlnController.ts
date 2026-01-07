import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nln")
export default class NlnController {
  @operation({
    summary: "Get Nln",
  })
  @get()
  static getNln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nln",
  })
  @post("{id}")
  static createNln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
