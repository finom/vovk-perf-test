import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erx")
export default class ErxController {
  @operation({
    summary: "Get Erx",
  })
  @get()
  static getErx = procedure({
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
