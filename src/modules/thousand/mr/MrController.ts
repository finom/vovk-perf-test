import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrs")
export default class MrController {
  @operation({
    summary: "Get Mrs",
  })
  @get()
  static getMrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mr",
  })
  @post("{id}")
  static createMr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
