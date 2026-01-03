import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmies")
export default class LmyController {
  @operation({
    summary: "Get Lmies",
  })
  @get()
  static getLmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmy",
  })
  @post("{id}")
  static createLmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
