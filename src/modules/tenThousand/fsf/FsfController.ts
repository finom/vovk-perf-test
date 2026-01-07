import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsf")
export default class FsfController {
  @operation({
    summary: "Get Fsf",
  })
  @get()
  static getFsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsf",
  })
  @post("{id}")
  static createFsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
