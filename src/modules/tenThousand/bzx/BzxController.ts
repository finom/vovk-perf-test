import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzxes")
export default class BzxController {
  @operation({
    summary: "Get Bzxes",
  })
  @get()
  static getBzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzx",
  })
  @post("{id}")
  static createBzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
