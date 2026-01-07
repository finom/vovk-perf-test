import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miw")
export default class MiwController {
  @operation({
    summary: "Get Miw",
  })
  @get()
  static getMiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miw",
  })
  @post("{id}")
  static createMiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
