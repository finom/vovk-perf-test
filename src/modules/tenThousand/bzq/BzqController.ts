import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzqs")
export default class BzqController {
  @operation({
    summary: "Get Bzqs",
  })
  @get()
  static getBzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzq",
  })
  @post("{id}")
  static createBzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
