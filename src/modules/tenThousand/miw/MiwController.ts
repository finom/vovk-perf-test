import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miws")
export default class MiwController {
  @operation({
    summary: "Get Miws",
  })
  @get()
  static getMiws = procedure({
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
