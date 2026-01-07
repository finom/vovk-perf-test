import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giw")
export default class GiwController {
  @operation({
    summary: "Get Giw",
  })
  @get()
  static getGiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giw",
  })
  @post("{id}")
  static createGiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
