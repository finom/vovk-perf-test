import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezqs")
export default class EzqController {
  @operation({
    summary: "Get Ezqs",
  })
  @get()
  static getEzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezq",
  })
  @post("{id}")
  static createEzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
