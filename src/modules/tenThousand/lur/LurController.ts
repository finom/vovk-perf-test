import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lurs")
export default class LurController {
  @operation({
    summary: "Get Lurs",
  })
  @get()
  static getLurs = procedure({
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
