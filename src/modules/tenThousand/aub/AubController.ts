import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aub")
export default class AubController {
  @operation({
    summary: "Get Aub",
  })
  @get()
  static getAub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aub",
  })
  @post("{id}")
  static createAub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
