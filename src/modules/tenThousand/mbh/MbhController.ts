import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbh")
export default class MbhController {
  @operation({
    summary: "Get Mbh",
  })
  @get()
  static getMbh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbh",
  })
  @post("{id}")
  static createMbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
