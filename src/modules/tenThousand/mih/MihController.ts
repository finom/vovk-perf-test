import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mihs")
export default class MihController {
  @operation({
    summary: "Get Mihs",
  })
  @get()
  static getMihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mih",
  })
  @post("{id}")
  static createMih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
