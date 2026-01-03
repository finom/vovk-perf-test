import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frs")
export default class FrsController {
  @operation({
    summary: "Get Frs",
  })
  @get()
  static getFrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frs",
  })
  @post("{id}")
  static createFrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
