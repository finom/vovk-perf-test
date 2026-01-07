import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnf")
export default class HnfController {
  @operation({
    summary: "Get Hnf",
  })
  @get()
  static getHnf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnf",
  })
  @post("{id}")
  static createHnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
