import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exh")
export default class ExhController {
  @operation({
    summary: "Get Exh",
  })
  @get()
  static getExh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exh",
  })
  @post("{id}")
  static createExh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
