import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nh")
export default class NhController {
  @operation({
    summary: "Get Nh",
  })
  @get()
  static getNh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nh",
  })
  @post("{id}")
  static createNh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
