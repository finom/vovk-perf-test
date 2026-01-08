import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kan")
export default class KanController {
  @operation({
    summary: "Get Kan",
  })
  @get()
  static getKan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kan",
  })
  @post("{id}")
  static createKan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
