import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjq")
export default class GjqController {
  @operation({
    summary: "Get Gjq",
  })
  @get()
  static getGjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjq",
  })
  @post("{id}")
  static createGjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
