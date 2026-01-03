import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hches")
export default class HchController {
  @operation({
    summary: "Get Hches",
  })
  @get()
  static getHches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hch",
  })
  @post("{id}")
  static createHch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
