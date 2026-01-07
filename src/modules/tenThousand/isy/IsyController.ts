import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isy")
export default class IsyController {
  @operation({
    summary: "Get Isy",
  })
  @get()
  static getIsy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isy",
  })
  @post("{id}")
  static createIsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
