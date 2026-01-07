import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exq")
export default class ExqController {
  @operation({
    summary: "Get Exq",
  })
  @get()
  static getExq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exq",
  })
  @post("{id}")
  static createExq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
