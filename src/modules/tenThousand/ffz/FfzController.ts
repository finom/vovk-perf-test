import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffz")
export default class FfzController {
  @operation({
    summary: "Get Ffz",
  })
  @get()
  static getFfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffz",
  })
  @post("{id}")
  static createFfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
