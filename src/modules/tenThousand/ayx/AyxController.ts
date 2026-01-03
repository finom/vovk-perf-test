import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayxes")
export default class AyxController {
  @operation({
    summary: "Get Ayxes",
  })
  @get()
  static getAyxes = procedure({
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
