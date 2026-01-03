import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mscs")
export default class MscController {
  @operation({
    summary: "Get Mscs",
  })
  @get()
  static getMscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msc",
  })
  @post("{id}")
  static createMsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
