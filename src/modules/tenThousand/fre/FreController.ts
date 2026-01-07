import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fre")
export default class FreController {
  @operation({
    summary: "Get Fre",
  })
  @get()
  static getFre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fre",
  })
  @post("{id}")
  static createFre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
