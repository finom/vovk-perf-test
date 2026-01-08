import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxc")
export default class KxcController {
  @operation({
    summary: "Get Kxc",
  })
  @get()
  static getKxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxc",
  })
  @post("{id}")
  static createKxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
