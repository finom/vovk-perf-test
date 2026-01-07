import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qt")
export default class QtController {
  @operation({
    summary: "Get Qt",
  })
  @get()
  static getQt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qt",
  })
  @post("{id}")
  static createQt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
