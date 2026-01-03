import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuns")
export default class CunController {
  @operation({
    summary: "Get Cuns",
  })
  @get()
  static getCuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cun",
  })
  @post("{id}")
  static createCun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
