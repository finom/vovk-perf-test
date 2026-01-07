import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bue")
export default class BueController {
  @operation({
    summary: "Get Bue",
  })
  @get()
  static getBue = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bue",
  })
  @post("{id}")
  static createBue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
