import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqu")
export default class JquController {
  @operation({
    summary: "Get Jqu",
  })
  @get()
  static getJqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqu",
  })
  @post("{id}")
  static createJqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
