import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flk")
export default class FlkController {
  @operation({
    summary: "Get Flk",
  })
  @get()
  static getFlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flk",
  })
  @post("{id}")
  static createFlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
