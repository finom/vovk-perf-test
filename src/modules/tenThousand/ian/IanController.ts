import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ian")
export default class IanController {
  @operation({
    summary: "Get Ian",
  })
  @get()
  static getIan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ian",
  })
  @post("{id}")
  static createIan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
