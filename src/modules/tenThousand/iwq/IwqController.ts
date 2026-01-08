import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwq")
export default class IwqController {
  @operation({
    summary: "Get Iwq",
  })
  @get()
  static getIwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwq",
  })
  @post("{id}")
  static createIwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
