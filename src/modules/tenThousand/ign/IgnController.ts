import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ign")
export default class IgnController {
  @operation({
    summary: "Get Ign",
  })
  @get()
  static getIgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ign",
  })
  @post("{id}")
  static createIgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
