import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmy")
export default class FmyController {
  @operation({
    summary: "Get Fmy",
  })
  @get()
  static getFmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmy",
  })
  @post("{id}")
  static createFmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
