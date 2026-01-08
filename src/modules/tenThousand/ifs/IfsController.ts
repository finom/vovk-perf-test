import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifs")
export default class IfsController {
  @operation({
    summary: "Get Ifs",
  })
  @get()
  static getIfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifs",
  })
  @post("{id}")
  static createIfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
