import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nak")
export default class NakController {
  @operation({
    summary: "Get Nak",
  })
  @get()
  static getNak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nak",
  })
  @post("{id}")
  static createNak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
