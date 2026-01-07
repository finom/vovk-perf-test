import { procedure, prefix, get, post, operation } from "vovk";

@prefix("der")
export default class DerController {
  @operation({
    summary: "Get Der",
  })
  @get()
  static getDer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Der",
  })
  @post("{id}")
  static createDer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
