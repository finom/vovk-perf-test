import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpps")
export default class BppController {
  @operation({
    summary: "Get Bpps",
  })
  @get()
  static getBpps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpp",
  })
  @post("{id}")
  static createBpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
