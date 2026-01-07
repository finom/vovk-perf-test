import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmy")
export default class LmyController {
  @operation({
    summary: "Get Lmy",
  })
  @get()
  static getLmy = procedure({
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
