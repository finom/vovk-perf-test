import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meb")
export default class MebController {
  @operation({
    summary: "Get Meb",
  })
  @get()
  static getMeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meb",
  })
  @post("{id}")
  static createMeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
