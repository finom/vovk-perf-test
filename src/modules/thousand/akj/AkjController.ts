import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akj")
export default class AkjController {
  @operation({
    summary: "Get Akj",
  })
  @get()
  static getAkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akj",
  })
  @post("{id}")
  static createAkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
