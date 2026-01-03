import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alxes")
export default class AlxController {
  @operation({
    summary: "Get Alxes",
  })
  @get()
  static getAlxes = procedure({
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
