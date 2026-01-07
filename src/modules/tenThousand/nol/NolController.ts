import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nol")
export default class NolController {
  @operation({
    summary: "Get Nol",
  })
  @get()
  static getNol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nol",
  })
  @post("{id}")
  static createNol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
