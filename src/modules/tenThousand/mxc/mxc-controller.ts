import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxc")
export default class MxcController {
  @operation({
    summary: "Get Mxc",
  })
  @get()
  static getMxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxc",
  })
  @post("{id}")
  static createMxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
