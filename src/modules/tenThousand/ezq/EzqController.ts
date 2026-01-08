import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezq")
export default class EzqController {
  @operation({
    summary: "Get Ezq",
  })
  @get()
  static getEzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezq",
  })
  @post("{id}")
  static createEzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
