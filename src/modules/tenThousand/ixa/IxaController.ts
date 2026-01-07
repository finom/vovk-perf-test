import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixa")
export default class IxaController {
  @operation({
    summary: "Get Ixa",
  })
  @get()
  static getIxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixa",
  })
  @post("{id}")
  static createIxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
