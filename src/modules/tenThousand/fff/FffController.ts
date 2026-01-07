import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fff")
export default class FffController {
  @operation({
    summary: "Get Fff",
  })
  @get()
  static getFff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fff",
  })
  @post("{id}")
  static createFff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
