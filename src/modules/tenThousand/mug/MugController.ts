import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mugs")
export default class MugController {
  @operation({
    summary: "Get Mugs",
  })
  @get()
  static getMugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mug",
  })
  @post("{id}")
  static createMug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
