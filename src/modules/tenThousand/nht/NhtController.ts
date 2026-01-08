import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nht")
export default class NhtController {
  @operation({
    summary: "Get Nht",
  })
  @get()
  static getNht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nht",
  })
  @post("{id}")
  static createNht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
