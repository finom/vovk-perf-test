import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llo")
export default class LloController {
  @operation({
    summary: "Get Llo",
  })
  @get()
  static getLlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llo",
  })
  @post("{id}")
  static createLlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
