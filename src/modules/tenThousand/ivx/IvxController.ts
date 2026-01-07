import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivx")
export default class IvxController {
  @operation({
    summary: "Get Ivx",
  })
  @get()
  static getIvx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivx",
  })
  @post("{id}")
  static createIvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
