import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ary")
export default class AryController {
  @operation({
    summary: "Get Ary",
  })
  @get()
  static getAry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ary",
  })
  @post("{id}")
  static createAry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
