import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koh")
export default class KohController {
  @operation({
    summary: "Get Koh",
  })
  @get()
  static getKoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koh",
  })
  @post("{id}")
  static createKoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
