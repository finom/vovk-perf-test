import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npu")
export default class NpuController {
  @operation({
    summary: "Get Npu",
  })
  @get()
  static getNpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npu",
  })
  @post("{id}")
  static createNpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
