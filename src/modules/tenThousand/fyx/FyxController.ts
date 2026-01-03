import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyxes")
export default class FyxController {
  @operation({
    summary: "Get Fyxes",
  })
  @get()
  static getFyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyx",
  })
  @post("{id}")
  static createFyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
