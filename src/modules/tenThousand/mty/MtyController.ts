import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mty")
export default class MtyController {
  @operation({
    summary: "Get Mty",
  })
  @get()
  static getMty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mty",
  })
  @post("{id}")
  static createMty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
