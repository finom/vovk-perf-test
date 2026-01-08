import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktt")
export default class KttController {
  @operation({
    summary: "Get Ktt",
  })
  @get()
  static getKtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktt",
  })
  @post("{id}")
  static createKtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
