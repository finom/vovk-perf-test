import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahds")
export default class AhdController {
  @operation({
    summary: "Get Ahds",
  })
  @get()
  static getAhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahd",
  })
  @post("{id}")
  static createAhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
