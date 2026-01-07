import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gye")
export default class GyeController {
  @operation({
    summary: "Get Gye",
  })
  @get()
  static getGye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gye",
  })
  @post("{id}")
  static createGye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
