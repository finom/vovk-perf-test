import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fds")
export default class FdController {
  @operation({
    summary: "Get Fds",
  })
  @get()
  static getFds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fd",
  })
  @post("{id}")
  static createFd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
