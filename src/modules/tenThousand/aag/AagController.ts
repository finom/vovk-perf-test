import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aag")
export default class AagController {
  @operation({
    summary: "Get Aag",
  })
  @get()
  static getAag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aag",
  })
  @post("{id}")
  static createAag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
