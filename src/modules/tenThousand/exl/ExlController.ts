import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exl")
export default class ExlController {
  @operation({
    summary: "Get Exl",
  })
  @get()
  static getExl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exl",
  })
  @post("{id}")
  static createExl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
