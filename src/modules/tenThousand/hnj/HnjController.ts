import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnj")
export default class HnjController {
  @operation({
    summary: "Get Hnj",
  })
  @get()
  static getHnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnj",
  })
  @post("{id}")
  static createHnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
