import { procedure, prefix, get, post, operation } from "vovk";

@prefix("px")
export default class PxController {
  @operation({
    summary: "Get Px",
  })
  @get()
  static getPx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Px",
  })
  @post("{id}")
  static createPx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
