import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vy")
export default class VyController {
  @operation({
    summary: "Get Vy",
  })
  @get()
  static getVy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vy",
  })
  @post("{id}")
  static createVy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
