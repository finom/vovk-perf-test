import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyks")
export default class IykController {
  @operation({
    summary: "Get Iyks",
  })
  @get()
  static getIyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyk",
  })
  @post("{id}")
  static createIyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
