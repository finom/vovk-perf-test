import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivds")
export default class IvdController {
  @operation({
    summary: "Get Ivds",
  })
  @get()
  static getIvds = procedure({
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
