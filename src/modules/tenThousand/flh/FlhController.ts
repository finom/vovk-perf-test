import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flhs")
export default class FlhController {
  @operation({
    summary: "Get Flhs",
  })
  @get()
  static getFlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flh",
  })
  @post("{id}")
  static createFlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
