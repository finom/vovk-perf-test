import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dni")
export default class DniController {
  @operation({
    summary: "Get Dni",
  })
  @get()
  static getDni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dni",
  })
  @post("{id}")
  static createDni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
