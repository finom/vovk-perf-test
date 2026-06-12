import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpu")
export default class BpuController {
  @operation({
    summary: "Get Bpu",
  })
  @get()
  static getBpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpu",
  })
  @post("{id}")
  static createBpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
