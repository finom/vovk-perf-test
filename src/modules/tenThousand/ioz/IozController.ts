import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioz")
export default class IozController {
  @operation({
    summary: "Get Ioz",
  })
  @get()
  static getIoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioz",
  })
  @post("{id}")
  static createIoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
