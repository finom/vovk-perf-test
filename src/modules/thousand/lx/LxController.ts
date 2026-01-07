import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lx")
export default class LxController {
  @operation({
    summary: "Get Lx",
  })
  @get()
  static getLx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lx",
  })
  @post("{id}")
  static createLx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
