import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddp")
export default class DdpController {
  @operation({
    summary: "Get Ddp",
  })
  @get()
  static getDdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddp",
  })
  @post("{id}")
  static createDdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
