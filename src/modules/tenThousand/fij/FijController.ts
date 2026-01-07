import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fij")
export default class FijController {
  @operation({
    summary: "Get Fij",
  })
  @get()
  static getFij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fij",
  })
  @post("{id}")
  static createFij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
