import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aozs")
export default class AozController {
  @operation({
    summary: "Get Aozs",
  })
  @get()
  static getAozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoz",
  })
  @post("{id}")
  static createAoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
