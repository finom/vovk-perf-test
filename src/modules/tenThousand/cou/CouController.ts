import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cous")
export default class CouController {
  @operation({
    summary: "Get Cous",
  })
  @get()
  static getCous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cou",
  })
  @post("{id}")
  static createCou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
