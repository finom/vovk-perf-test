import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoz")
export default class AozController {
  @operation({
    summary: "Get Aoz",
  })
  @get()
  static getAoz = procedure({
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
