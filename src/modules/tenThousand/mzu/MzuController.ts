import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzu")
export default class MzuController {
  @operation({
    summary: "Get Mzu",
  })
  @get()
  static getMzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzu",
  })
  @post("{id}")
  static createMzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
