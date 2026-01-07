import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mck")
export default class MckController {
  @operation({
    summary: "Get Mck",
  })
  @get()
  static getMck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mck",
  })
  @post("{id}")
  static createMck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
