import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbhs")
export default class MbhController {
  @operation({
    summary: "Get Mbhs",
  })
  @get()
  static getMbhs = procedure({
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
