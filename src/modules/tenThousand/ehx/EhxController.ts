import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehx")
export default class EhxController {
  @operation({
    summary: "Get Ehx",
  })
  @get()
  static getEhx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehx",
  })
  @post("{id}")
  static createEhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
