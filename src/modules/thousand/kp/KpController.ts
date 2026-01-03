import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kps")
export default class KpController {
  @operation({
    summary: "Get Kps",
  })
  @get()
  static getKps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kp",
  })
  @post("{id}")
  static createKp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
