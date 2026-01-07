import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fz")
export default class FzController {
  @operation({
    summary: "Get Fz",
  })
  @get()
  static getFz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fz",
  })
  @post("{id}")
  static createFz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
