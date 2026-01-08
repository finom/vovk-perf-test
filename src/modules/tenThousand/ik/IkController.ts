import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ik")
export default class IkController {
  @operation({
    summary: "Get Ik",
  })
  @get()
  static getIk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ik",
  })
  @post("{id}")
  static createIk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
