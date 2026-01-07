import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyx")
export default class DyxController {
  @operation({
    summary: "Get Dyx",
  })
  @get()
  static getDyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyx",
  })
  @post("{id}")
  static createDyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
