import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrus")
export default class MruController {
  @operation({
    summary: "Get Mrus",
  })
  @get()
  static getMrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mru",
  })
  @post("{id}")
  static createMru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
