import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijrs")
export default class IjrController {
  @operation({
    summary: "Get Ijrs",
  })
  @get()
  static getIjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijr",
  })
  @post("{id}")
  static createIjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
