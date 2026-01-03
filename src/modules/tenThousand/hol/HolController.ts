import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hols")
export default class HolController {
  @operation({
    summary: "Get Hols",
  })
  @get()
  static getHols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hol",
  })
  @post("{id}")
  static createHol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
