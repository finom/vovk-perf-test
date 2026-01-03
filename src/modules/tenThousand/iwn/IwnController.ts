import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwns")
export default class IwnController {
  @operation({
    summary: "Get Iwns",
  })
  @get()
  static getIwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwn",
  })
  @post("{id}")
  static createIwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
