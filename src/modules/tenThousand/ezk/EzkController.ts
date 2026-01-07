import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezk")
export default class EzkController {
  @operation({
    summary: "Get Ezk",
  })
  @get()
  static getEzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezk",
  })
  @post("{id}")
  static createEzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
