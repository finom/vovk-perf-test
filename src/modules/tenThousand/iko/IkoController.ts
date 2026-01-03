import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikos")
export default class IkoController {
  @operation({
    summary: "Get Ikos",
  })
  @get()
  static getIkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iko",
  })
  @post("{id}")
  static createIko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
