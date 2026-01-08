import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("act")
export default class ActController {
  @operation({
    summary: "Get Act",
  })
  @get()
  static getAct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Act",
  })
  @post("{id}")
  static createAct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
