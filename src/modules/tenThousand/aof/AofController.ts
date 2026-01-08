import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aof")
export default class AofController {
  @operation({
    summary: "Get Aof",
  })
  @get()
  static getAof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aof",
  })
  @post("{id}")
  static createAof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
