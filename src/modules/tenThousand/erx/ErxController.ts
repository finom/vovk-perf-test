import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erxes")
export default class ErxController {
  @operation({
    summary: "Get Erxes",
  })
  @get()
  static getErxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erx",
  })
  @post("{id}")
  static createErx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
