import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhxes")
export default class MhxController {
  @operation({
    summary: "Get Mhxes",
  })
  @get()
  static getMhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhx",
  })
  @post("{id}")
  static createMhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
