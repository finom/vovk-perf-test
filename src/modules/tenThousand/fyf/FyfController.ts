import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyfs")
export default class FyfController {
  @operation({
    summary: "Get Fyfs",
  })
  @get()
  static getFyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyf",
  })
  @post("{id}")
  static createFyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
