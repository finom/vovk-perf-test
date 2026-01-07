import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lij")
export default class LijController {
  @operation({
    summary: "Get Lij",
  })
  @get()
  static getLij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lij",
  })
  @post("{id}")
  static createLij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
