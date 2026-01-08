import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeg")
export default class JegController {
  @operation({
    summary: "Get Jeg",
  })
  @get()
  static getJeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeg",
  })
  @post("{id}")
  static createJeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
