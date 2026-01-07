import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqa")
export default class LqaController {
  @operation({
    summary: "Get Lqa",
  })
  @get()
  static getLqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqa",
  })
  @post("{id}")
  static createLqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
