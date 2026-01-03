import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdies")
export default class MdyController {
  @operation({
    summary: "Get Mdies",
  })
  @get()
  static getMdies = procedure({
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
