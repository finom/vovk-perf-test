import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bues")
export default class BueController {
  @operation({
    summary: "Get Bues",
  })
  @get()
  static getBues = procedure({
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
