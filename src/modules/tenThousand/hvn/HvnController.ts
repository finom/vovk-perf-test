import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvns")
export default class HvnController {
  @operation({
    summary: "Get Hvns",
  })
  @get()
  static getHvns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvn",
  })
  @post("{id}")
  static createHvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
