import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdg")
export default class MdgController {
  @operation({
    summary: "Get Mdg",
  })
  @get()
  static getMdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdg",
  })
  @post("{id}")
  static createMdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
