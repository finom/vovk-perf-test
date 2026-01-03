import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izts")
export default class IztController {
  @operation({
    summary: "Get Izts",
  })
  @get()
  static getIzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izt",
  })
  @post("{id}")
  static createIzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
