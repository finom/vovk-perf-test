import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nal")
export default class NalController {
  @operation({
    summary: "Get Nal",
  })
  @get()
  static getNal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nal",
  })
  @post("{id}")
  static createNal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
