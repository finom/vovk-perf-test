import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("es")
export default class EsController {
  @operation({
    summary: "Get Es",
  })
  @get()
  static getEs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Es",
  })
  @post("{id}")
  static createEs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
