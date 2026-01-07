import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayx")
export default class AyxController {
  @operation({
    summary: "Get Ayx",
  })
  @get()
  static getAyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayx",
  })
  @post("{id}")
  static createAyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
