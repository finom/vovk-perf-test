import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iys")
export default class IysController {
  @operation({
    summary: "Get Iys",
  })
  @get()
  static getIys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iys",
  })
  @post("{id}")
  static createIys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
