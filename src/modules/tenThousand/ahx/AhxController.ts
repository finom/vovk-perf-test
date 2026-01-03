import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahxes")
export default class AhxController {
  @operation({
    summary: "Get Ahxes",
  })
  @get()
  static getAhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahx",
  })
  @post("{id}")
  static createAhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
