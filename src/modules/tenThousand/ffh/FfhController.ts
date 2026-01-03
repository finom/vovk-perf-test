import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffhs")
export default class FfhController {
  @operation({
    summary: "Get Ffhs",
  })
  @get()
  static getFfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffh",
  })
  @post("{id}")
  static createFfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
