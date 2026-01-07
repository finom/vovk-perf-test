import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bty")
export default class BtyController {
  @operation({
    summary: "Get Bty",
  })
  @get()
  static getBty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bty",
  })
  @post("{id}")
  static createBty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
