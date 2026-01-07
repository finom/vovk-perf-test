import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feg")
export default class FegController {
  @operation({
    summary: "Get Feg",
  })
  @get()
  static getFeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feg",
  })
  @post("{id}")
  static createFeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
