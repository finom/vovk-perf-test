import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erh")
export default class ErhController {
  @operation({
    summary: "Get Erh",
  })
  @get()
  static getErh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erh",
  })
  @post("{id}")
  static createErh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
