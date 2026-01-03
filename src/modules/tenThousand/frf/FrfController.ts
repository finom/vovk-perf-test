import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frfs")
export default class FrfController {
  @operation({
    summary: "Get Frfs",
  })
  @get()
  static getFrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frf",
  })
  @post("{id}")
  static createFrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
