import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezx")
export default class EzxController {
  @operation({
    summary: "Get Ezx",
  })
  @get()
  static getEzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezx",
  })
  @post("{id}")
  static createEzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
