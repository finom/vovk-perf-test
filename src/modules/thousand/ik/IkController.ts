import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iks")
export default class IkController {
  @operation({
    summary: "Get Iks",
  })
  @get()
  static getIks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ik",
  })
  @post("{id}")
  static createIk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
