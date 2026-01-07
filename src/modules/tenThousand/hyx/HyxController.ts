import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyx")
export default class HyxController {
  @operation({
    summary: "Get Hyx",
  })
  @get()
  static getHyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyx",
  })
  @post("{id}")
  static createHyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
