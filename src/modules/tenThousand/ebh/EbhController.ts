import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebh")
export default class EbhController {
  @operation({
    summary: "Get Ebh",
  })
  @get()
  static getEbh = procedure({
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
