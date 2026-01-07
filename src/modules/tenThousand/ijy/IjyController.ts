import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijy")
export default class IjyController {
  @operation({
    summary: "Get Ijy",
  })
  @get()
  static getIjy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijy",
  })
  @post("{id}")
  static createIjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
