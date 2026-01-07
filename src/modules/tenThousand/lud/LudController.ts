import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lud")
export default class LudController {
  @operation({
    summary: "Get Lud",
  })
  @get()
  static getLud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lud",
  })
  @post("{id}")
  static createLud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
