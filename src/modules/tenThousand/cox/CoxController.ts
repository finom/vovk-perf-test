import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cox")
export default class CoxController {
  @operation({
    summary: "Get Cox",
  })
  @get()
  static getCox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cox",
  })
  @post("{id}")
  static createCox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
