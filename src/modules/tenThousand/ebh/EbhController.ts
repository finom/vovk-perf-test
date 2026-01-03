import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebhs")
export default class EbhController {
  @operation({
    summary: "Get Ebhs",
  })
  @get()
  static getEbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebh",
  })
  @post("{id}")
  static createEbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
