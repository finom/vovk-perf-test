import { procedure, prefix, get, post, operation } from "vovk";

@prefix("com")
export default class ComController {
  @operation({
    summary: "Get Com",
  })
  @get()
  static getCom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Com",
  })
  @post("{id}")
  static createCom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
