import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqw")
export default class AqwController {
  @operation({
    summary: "Get Aqw",
  })
  @get()
  static getAqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqw",
  })
  @post("{id}")
  static createAqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
