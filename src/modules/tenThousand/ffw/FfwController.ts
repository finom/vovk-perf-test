import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffws")
export default class FfwController {
  @operation({
    summary: "Get Ffws",
  })
  @get()
  static getFfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffw",
  })
  @post("{id}")
  static createFfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
