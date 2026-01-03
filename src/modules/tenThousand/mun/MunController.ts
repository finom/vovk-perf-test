import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muns")
export default class MunController {
  @operation({
    summary: "Get Muns",
  })
  @get()
  static getMuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mun",
  })
  @post("{id}")
  static createMun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
