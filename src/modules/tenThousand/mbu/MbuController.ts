import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbus")
export default class MbuController {
  @operation({
    summary: "Get Mbus",
  })
  @get()
  static getMbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbu",
  })
  @post("{id}")
  static createMbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
