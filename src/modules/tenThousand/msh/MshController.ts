import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msh")
export default class MshController {
  @operation({
    summary: "Get Msh",
  })
  @get()
  static getMsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msh",
  })
  @post("{id}")
  static createMsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
