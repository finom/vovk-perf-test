import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lees")
export default class LeeController {
  @operation({
    summary: "Get Lees",
  })
  @get()
  static getLees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lee",
  })
  @post("{id}")
  static createLee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
