import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mym")
export default class MymController {
  @operation({
    summary: "Get Mym",
  })
  @get()
  static getMym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mym",
  })
  @post("{id}")
  static createMym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
