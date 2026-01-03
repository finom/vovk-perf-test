import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bijs")
export default class BijController {
  @operation({
    summary: "Get Bijs",
  })
  @get()
  static getBijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bij",
  })
  @post("{id}")
  static createBij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
