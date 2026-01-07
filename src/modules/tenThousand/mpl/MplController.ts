import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpl")
export default class MplController {
  @operation({
    summary: "Get Mpl",
  })
  @get()
  static getMpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpl",
  })
  @post("{id}")
  static createMpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
