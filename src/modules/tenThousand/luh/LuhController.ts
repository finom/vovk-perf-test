import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luh")
export default class LuhController {
  @operation({
    summary: "Get Luh",
  })
  @get()
  static getLuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luh",
  })
  @post("{id}")
  static createLuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
