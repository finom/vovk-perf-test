import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hops")
export default class HopController {
  @operation({
    summary: "Get Hops",
  })
  @get()
  static getHops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hop",
  })
  @post("{id}")
  static createHop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
