import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avf")
export default class AvfController {
  @operation({
    summary: "Get Avf",
  })
  @get()
  static getAvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avf",
  })
  @post("{id}")
  static createAvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
