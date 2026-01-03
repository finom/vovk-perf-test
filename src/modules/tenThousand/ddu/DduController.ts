import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddus")
export default class DduController {
  @operation({
    summary: "Get Ddus",
  })
  @get()
  static getDdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddu",
  })
  @post("{id}")
  static createDdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
