import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgh")
export default class KghController {
  @operation({
    summary: "Get Kgh",
  })
  @get()
  static getKgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgh",
  })
  @post("{id}")
  static createKgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
