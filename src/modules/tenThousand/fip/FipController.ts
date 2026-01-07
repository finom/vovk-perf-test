import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fip")
export default class FipController {
  @operation({
    summary: "Get Fip",
  })
  @get()
  static getFip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fip",
  })
  @post("{id}")
  static createFip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
