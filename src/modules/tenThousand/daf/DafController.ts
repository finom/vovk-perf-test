import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dafs")
export default class DafController {
  @operation({
    summary: "Get Dafs",
  })
  @get()
  static getDafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daf",
  })
  @post("{id}")
  static createDaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
