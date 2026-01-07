import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggi")
export default class GgiController {
  @operation({
    summary: "Get Ggi",
  })
  @get()
  static getGgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggi",
  })
  @post("{id}")
  static createGgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
