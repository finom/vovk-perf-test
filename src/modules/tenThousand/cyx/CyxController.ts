import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyx")
export default class CyxController {
  @operation({
    summary: "Get Cyx",
  })
  @get()
  static getCyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyx",
  })
  @post("{id}")
  static createCyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
