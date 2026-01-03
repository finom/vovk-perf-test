import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flcs")
export default class FlcController {
  @operation({
    summary: "Get Flcs",
  })
  @get()
  static getFlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flc",
  })
  @post("{id}")
  static createFlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
