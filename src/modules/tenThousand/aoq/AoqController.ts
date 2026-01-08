import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoq")
export default class AoqController {
  @operation({
    summary: "Get Aoq",
  })
  @get()
  static getAoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoq",
  })
  @post("{id}")
  static createAoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
