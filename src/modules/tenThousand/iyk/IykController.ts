import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyk")
export default class IykController {
  @operation({
    summary: "Get Iyk",
  })
  @get()
  static getIyk = procedure({
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
