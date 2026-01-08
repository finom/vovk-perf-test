import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("har")
export default class HarController {
  @operation({
    summary: "Get Har",
  })
  @get()
  static getHar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Har",
  })
  @post("{id}")
  static createHar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
