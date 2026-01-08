import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmn")
export default class NmnController {
  @operation({
    summary: "Get Nmn",
  })
  @get()
  static getNmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmn",
  })
  @post("{id}")
  static createNmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
