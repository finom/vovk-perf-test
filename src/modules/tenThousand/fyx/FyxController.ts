import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyx")
export default class FyxController {
  @operation({
    summary: "Get Fyx",
  })
  @get()
  static getFyx = procedure({
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
