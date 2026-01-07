import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myr")
export default class MyrController {
  @operation({
    summary: "Get Myr",
  })
  @get()
  static getMyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myr",
  })
  @post("{id}")
  static createMyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
