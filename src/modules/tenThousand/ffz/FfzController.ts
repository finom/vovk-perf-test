import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffzs")
export default class FfzController {
  @operation({
    summary: "Get Ffzs",
  })
  @get()
  static getFfzs = procedure({
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
