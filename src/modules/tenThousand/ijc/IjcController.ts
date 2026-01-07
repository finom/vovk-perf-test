import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijc")
export default class IjcController {
  @operation({
    summary: "Get Ijc",
  })
  @get()
  static getIjc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijc",
  })
  @post("{id}")
  static createIjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
