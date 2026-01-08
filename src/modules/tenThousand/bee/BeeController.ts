import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bee")
export default class BeeController {
  @operation({
    summary: "Get Bee",
  })
  @get()
  static getBee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bee",
  })
  @post("{id}")
  static createBee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
