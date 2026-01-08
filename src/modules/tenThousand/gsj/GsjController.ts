import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsj")
export default class GsjController {
  @operation({
    summary: "Get Gsj",
  })
  @get()
  static getGsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsj",
  })
  @post("{id}")
  static createGsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
