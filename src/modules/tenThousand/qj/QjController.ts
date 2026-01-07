import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qj")
export default class QjController {
  @operation({
    summary: "Get Qj",
  })
  @get()
  static getQj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qj",
  })
  @post("{id}")
  static createQj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
