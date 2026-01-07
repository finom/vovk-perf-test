import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fai")
export default class FaiController {
  @operation({
    summary: "Get Fai",
  })
  @get()
  static getFai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fai",
  })
  @post("{id}")
  static createFai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
