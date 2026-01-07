import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fty")
export default class FtyController {
  @operation({
    summary: "Get Fty",
  })
  @get()
  static getFty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fty",
  })
  @post("{id}")
  static createFty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
