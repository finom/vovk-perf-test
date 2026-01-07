import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hze")
export default class HzeController {
  @operation({
    summary: "Get Hze",
  })
  @get()
  static getHze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hze",
  })
  @post("{id}")
  static createHze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
