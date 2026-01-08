import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbq")
export default class GbqController {
  @operation({
    summary: "Get Gbq",
  })
  @get()
  static getGbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbq",
  })
  @post("{id}")
  static createGbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
