import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzh")
export default class BzhController {
  @operation({
    summary: "Get Bzh",
  })
  @get()
  static getBzh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzh",
  })
  @post("{id}")
  static createBzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
