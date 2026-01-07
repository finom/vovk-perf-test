import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmy")
export default class BmyController {
  @operation({
    summary: "Get Bmy",
  })
  @get()
  static getBmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmy",
  })
  @post("{id}")
  static createBmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
