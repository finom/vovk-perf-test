import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioq")
export default class IoqController {
  @operation({
    summary: "Get Ioq",
  })
  @get()
  static getIoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioq",
  })
  @post("{id}")
  static createIoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
