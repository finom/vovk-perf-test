import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxd")
export default class KxdController {
  @operation({
    summary: "Get Kxd",
  })
  @get()
  static getKxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxd",
  })
  @post("{id}")
  static createKxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
