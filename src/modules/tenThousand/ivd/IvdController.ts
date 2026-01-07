import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivd")
export default class IvdController {
  @operation({
    summary: "Get Ivd",
  })
  @get()
  static getIvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivd",
  })
  @post("{id}")
  static createIvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
