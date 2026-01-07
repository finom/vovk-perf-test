import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eva")
export default class EvaController {
  @operation({
    summary: "Get Eva",
  })
  @get()
  static getEva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eva",
  })
  @post("{id}")
  static createEva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
