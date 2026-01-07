import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltj")
export default class LtjController {
  @operation({
    summary: "Get Ltj",
  })
  @get()
  static getLtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltj",
  })
  @post("{id}")
  static createLtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
