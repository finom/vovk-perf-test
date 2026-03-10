import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdq")
export default class MdqController {
  @operation({
    summary: "Get Mdq",
  })
  @get()
  static getMdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdq",
  })
  @post("{id}")
  static createMdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
