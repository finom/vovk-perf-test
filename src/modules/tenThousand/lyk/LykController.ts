import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyk")
export default class LykController {
  @operation({
    summary: "Get Lyk",
  })
  @get()
  static getLyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyk",
  })
  @post("{id}")
  static createLyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
