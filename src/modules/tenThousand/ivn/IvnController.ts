import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivn")
export default class IvnController {
  @operation({
    summary: "Get Ivn",
  })
  @get()
  static getIvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivn",
  })
  @post("{id}")
  static createIvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
