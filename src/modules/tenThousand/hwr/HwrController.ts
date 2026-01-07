import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwr")
export default class HwrController {
  @operation({
    summary: "Get Hwr",
  })
  @get()
  static getHwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwr",
  })
  @post("{id}")
  static createHwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
