import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcks")
export default class HckController {
  @operation({
    summary: "Get Hcks",
  })
  @get()
  static getHcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hck",
  })
  @post("{id}")
  static createHck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
