import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qh")
export default class QhController {
  @operation({
    summary: "Get Qh",
  })
  @get()
  static getQh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qh",
  })
  @post("{id}")
  static createQh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
