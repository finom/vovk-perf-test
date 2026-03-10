import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfs")
export default class MfsController {
  @operation({
    summary: "Get Mfs",
  })
  @get()
  static getMfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfs",
  })
  @post("{id}")
  static createMfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
