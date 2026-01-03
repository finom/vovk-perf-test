import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iohs")
export default class IohController {
  @operation({
    summary: "Get Iohs",
  })
  @get()
  static getIohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioh",
  })
  @post("{id}")
  static createIoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
