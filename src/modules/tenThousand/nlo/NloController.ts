import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlos")
export default class NloController {
  @operation({
    summary: "Get Nlos",
  })
  @get()
  static getNlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlo",
  })
  @post("{id}")
  static createNlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
