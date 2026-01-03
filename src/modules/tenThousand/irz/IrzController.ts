import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irzs")
export default class IrzController {
  @operation({
    summary: "Get Irzs",
  })
  @get()
  static getIrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irz",
  })
  @post("{id}")
  static createIrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
