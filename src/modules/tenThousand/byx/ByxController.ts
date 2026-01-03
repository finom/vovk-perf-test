import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byxes")
export default class ByxController {
  @operation({
    summary: "Get Byxes",
  })
  @get()
  static getByxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byx",
  })
  @post("{id}")
  static createByx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
