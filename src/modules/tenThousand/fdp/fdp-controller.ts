import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdp")
export default class FdpController {
  @operation({
    summary: "Get Fdp",
  })
  @get()
  static getFdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdp",
  })
  @post("{id}")
  static createFdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
