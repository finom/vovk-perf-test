import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmqs")
export default class DmqController {
  @operation({
    summary: "Get Dmqs",
  })
  @get()
  static getDmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmq",
  })
  @post("{id}")
  static createDmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
