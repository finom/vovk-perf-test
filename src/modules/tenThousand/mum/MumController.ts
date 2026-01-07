import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mum")
export default class MumController {
  @operation({
    summary: "Get Mum",
  })
  @get()
  static getMum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mum",
  })
  @post("{id}")
  static createMum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
