import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfj")
export default class MfjController {
  @operation({
    summary: "Get Mfj",
  })
  @get()
  static getMfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfj",
  })
  @post("{id}")
  static createMfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
