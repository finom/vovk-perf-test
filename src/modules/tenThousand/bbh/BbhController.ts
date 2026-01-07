import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbh")
export default class BbhController {
  @operation({
    summary: "Get Bbh",
  })
  @get()
  static getBbh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbh",
  })
  @post("{id}")
  static createBbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
