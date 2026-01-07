import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbc")
export default class NbcController {
  @operation({
    summary: "Get Nbc",
  })
  @get()
  static getNbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbc",
  })
  @post("{id}")
  static createNbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
