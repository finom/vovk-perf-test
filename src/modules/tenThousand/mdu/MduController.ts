import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdu")
export default class MduController {
  @operation({
    summary: "Get Mdu",
  })
  @get()
  static getMdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdu",
  })
  @post("{id}")
  static createMdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
