import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nga")
export default class NgaController {
  @operation({
    summary: "Get Nga",
  })
  @get()
  static getNga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nga",
  })
  @post("{id}")
  static createNga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
