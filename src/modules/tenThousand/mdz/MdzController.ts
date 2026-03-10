import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdz")
export default class MdzController {
  @operation({
    summary: "Get Mdz",
  })
  @get()
  static getMdz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdz",
  })
  @post("{id}")
  static createMdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
