import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dols")
export default class DolController {
  @operation({
    summary: "Get Dols",
  })
  @get()
  static getDols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dol",
  })
  @post("{id}")
  static createDol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
