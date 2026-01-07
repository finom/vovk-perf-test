import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alx")
export default class AlxController {
  @operation({
    summary: "Get Alx",
  })
  @get()
  static getAlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alx",
  })
  @post("{id}")
  static createAlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
