import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkn")
export default class MknController {
  @operation({
    summary: "Get Mkn",
  })
  @get()
  static getMkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkn",
  })
  @post("{id}")
  static createMkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
