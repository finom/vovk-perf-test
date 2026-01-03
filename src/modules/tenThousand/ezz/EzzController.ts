import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezzes")
export default class EzzController {
  @operation({
    summary: "Get Ezzes",
  })
  @get()
  static getEzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezz",
  })
  @post("{id}")
  static createEzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
