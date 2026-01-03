import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyxes")
export default class IyxController {
  @operation({
    summary: "Get Iyxes",
  })
  @get()
  static getIyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyx",
  })
  @post("{id}")
  static createIyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
