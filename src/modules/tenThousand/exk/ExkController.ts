import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exk")
export default class ExkController {
  @operation({
    summary: "Get Exk",
  })
  @get()
  static getExk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exk",
  })
  @post("{id}")
  static createExk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
