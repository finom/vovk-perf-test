import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlf")
export default class JlfController {
  @operation({
    summary: "Get Jlf",
  })
  @get()
  static getJlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlf",
  })
  @post("{id}")
  static createJlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
