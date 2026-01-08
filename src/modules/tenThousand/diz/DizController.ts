import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("diz")
export default class DizController {
  @operation({
    summary: "Get Diz",
  })
  @get()
  static getDiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diz",
  })
  @post("{id}")
  static createDiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
