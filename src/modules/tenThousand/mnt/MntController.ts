import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnt")
export default class MntController {
  @operation({
    summary: "Get Mnt",
  })
  @get()
  static getMnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnt",
  })
  @post("{id}")
  static createMnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
