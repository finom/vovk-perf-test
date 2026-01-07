import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coo")
export default class CooController {
  @operation({
    summary: "Get Coo",
  })
  @get()
  static getCoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coo",
  })
  @post("{id}")
  static createCoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
