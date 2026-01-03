import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjns")
export default class HjnController {
  @operation({
    summary: "Get Hjns",
  })
  @get()
  static getHjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjn",
  })
  @post("{id}")
  static createHjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
