import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gp")
export default class GpController {
  @operation({
    summary: "Get Gp",
  })
  @get()
  static getGp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gp",
  })
  @post("{id}")
  static createGp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
