import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrf")
export default class NrfController {
  @operation({
    summary: "Get Nrf",
  })
  @get()
  static getNrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrf",
  })
  @post("{id}")
  static createNrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
