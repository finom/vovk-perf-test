import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ako")
export default class AkoController {
  @operation({
    summary: "Get Ako",
  })
  @get()
  static getAko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ako",
  })
  @post("{id}")
  static createAko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
