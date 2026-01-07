import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hno")
export default class HnoController {
  @operation({
    summary: "Get Hno",
  })
  @get()
  static getHno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hno",
  })
  @post("{id}")
  static createHno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
