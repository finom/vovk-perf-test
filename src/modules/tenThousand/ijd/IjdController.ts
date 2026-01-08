import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijd")
export default class IjdController {
  @operation({
    summary: "Get Ijd",
  })
  @get()
  static getIjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijd",
  })
  @post("{id}")
  static createIjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
