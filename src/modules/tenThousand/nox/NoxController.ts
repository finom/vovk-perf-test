import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noxen")
export default class NoxController {
  @operation({
    summary: "Get Noxen",
  })
  @get()
  static getNoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nox",
  })
  @post("{id}")
  static createNox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
