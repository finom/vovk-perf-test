import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aio")
export default class AioController {
  @operation({
    summary: "Get Aio",
  })
  @get()
  static getAio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aio",
  })
  @post("{id}")
  static createAio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
