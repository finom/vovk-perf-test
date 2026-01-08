import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqv")
export default class AqvController {
  @operation({
    summary: "Get Aqv",
  })
  @get()
  static getAqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqv",
  })
  @post("{id}")
  static createAqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
