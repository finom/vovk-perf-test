import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbq")
export default class HbqController {
  @operation({
    summary: "Get Hbq",
  })
  @get()
  static getHbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbq",
  })
  @post("{id}")
  static createHbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
