import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laus")
export default class LauController {
  @operation({
    summary: "Get Laus",
  })
  @get()
  static getLaus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lau",
  })
  @post("{id}")
  static createLau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
