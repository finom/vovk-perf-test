import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnp")
export default class HnpController {
  @operation({
    summary: "Get Hnp",
  })
  @get()
  static getHnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnp",
  })
  @post("{id}")
  static createHnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
