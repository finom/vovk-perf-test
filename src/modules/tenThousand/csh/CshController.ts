import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csh")
export default class CshController {
  @operation({
    summary: "Get Csh",
  })
  @get()
  static getCsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csh",
  })
  @post("{id}")
  static createCsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
