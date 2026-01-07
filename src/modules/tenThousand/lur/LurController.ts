import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lur")
export default class LurController {
  @operation({
    summary: "Get Lur",
  })
  @get()
  static getLur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lur",
  })
  @post("{id}")
  static createLur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
