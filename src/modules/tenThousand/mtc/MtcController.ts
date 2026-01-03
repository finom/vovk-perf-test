import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtcs")
export default class MtcController {
  @operation({
    summary: "Get Mtcs",
  })
  @get()
  static getMtcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtc",
  })
  @post("{id}")
  static createMtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
