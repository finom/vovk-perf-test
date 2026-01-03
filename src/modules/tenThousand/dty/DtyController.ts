import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dties")
export default class DtyController {
  @operation({
    summary: "Get Dties",
  })
  @get()
  static getDties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dty",
  })
  @post("{id}")
  static createDty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
