import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vh")
export default class VhController {
  @operation({
    summary: "Get Vh",
  })
  @get()
  static getVh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vh",
  })
  @post("{id}")
  static createVh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
