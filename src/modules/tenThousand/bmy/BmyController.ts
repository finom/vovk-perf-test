import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmies")
export default class BmyController {
  @operation({
    summary: "Get Bmies",
  })
  @get()
  static getBmies = procedure({
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
