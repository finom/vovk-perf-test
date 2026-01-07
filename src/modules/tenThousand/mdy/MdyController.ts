import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdy")
export default class MdyController {
  @operation({
    summary: "Get Mdy",
  })
  @get()
  static getMdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdy",
  })
  @post("{id}")
  static createMdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
