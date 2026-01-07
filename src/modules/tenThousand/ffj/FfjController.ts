import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffj")
export default class FfjController {
  @operation({
    summary: "Get Ffj",
  })
  @get()
  static getFfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffj",
  })
  @post("{id}")
  static createFfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
