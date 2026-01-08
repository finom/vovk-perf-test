import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhn")
export default class NhnController {
  @operation({
    summary: "Get Nhn",
  })
  @get()
  static getNhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhn",
  })
  @post("{id}")
  static createNhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
