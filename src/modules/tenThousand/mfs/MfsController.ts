import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfs")
export default class MfsController {
  @operation({
    summary: "Get Mfs",
  })
  @get()
  static getMfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfs",
  })
  @post("{id}")
  static createMfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
