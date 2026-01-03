import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijcs")
export default class IjcController {
  @operation({
    summary: "Get Ijcs",
  })
  @get()
  static getIjcs = procedure({
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
