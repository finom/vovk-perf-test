import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gy")
export default class GyController {
  @operation({
    summary: "Get Gy",
  })
  @get()
  static getGy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gy",
  })
  @post("{id}")
  static createGy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
