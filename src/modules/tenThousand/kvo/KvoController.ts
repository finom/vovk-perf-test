import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvo")
export default class KvoController {
  @operation({
    summary: "Get Kvo",
  })
  @get()
  static getKvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvo",
  })
  @post("{id}")
  static createKvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
