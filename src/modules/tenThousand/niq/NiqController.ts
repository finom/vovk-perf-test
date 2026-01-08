import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niq")
export default class NiqController {
  @operation({
    summary: "Get Niq",
  })
  @get()
  static getNiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niq",
  })
  @post("{id}")
  static createNiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
