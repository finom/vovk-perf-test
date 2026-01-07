import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bft")
export default class BftController {
  @operation({
    summary: "Get Bft",
  })
  @get()
  static getBft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bft",
  })
  @post("{id}")
  static createBft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
