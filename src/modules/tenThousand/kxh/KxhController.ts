import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxh")
export default class KxhController {
  @operation({
    summary: "Get Kxh",
  })
  @get()
  static getKxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxh",
  })
  @post("{id}")
  static createKxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
