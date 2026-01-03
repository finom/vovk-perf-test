import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fafs")
export default class FafController {
  @operation({
    summary: "Get Fafs",
  })
  @get()
  static getFafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faf",
  })
  @post("{id}")
  static createFaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
