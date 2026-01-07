import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyo")
export default class LyoController {
  @operation({
    summary: "Get Lyo",
  })
  @get()
  static getLyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyo",
  })
  @post("{id}")
  static createLyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
