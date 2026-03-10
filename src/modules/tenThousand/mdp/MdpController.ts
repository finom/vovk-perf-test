import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdp")
export default class MdpController {
  @operation({
    summary: "Get Mdp",
  })
  @get()
  static getMdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdp",
  })
  @post("{id}")
  static createMdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
