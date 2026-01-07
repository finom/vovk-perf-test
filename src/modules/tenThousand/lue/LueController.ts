import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lue")
export default class LueController {
  @operation({
    summary: "Get Lue",
  })
  @get()
  static getLue = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lue",
  })
  @post("{id}")
  static createLue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
