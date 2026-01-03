import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwrs")
export default class IwrController {
  @operation({
    summary: "Get Iwrs",
  })
  @get()
  static getIwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwr",
  })
  @post("{id}")
  static createIwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
