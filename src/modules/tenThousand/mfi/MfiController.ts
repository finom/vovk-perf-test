import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfis")
export default class MfiController {
  @operation({
    summary: "Get Mfis",
  })
  @get()
  static getMfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfi",
  })
  @post("{id}")
  static createMfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
