import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpu")
export default class CpuController {
  @operation({
    summary: "Get Cpu",
  })
  @get()
  static getCpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpu",
  })
  @post("{id}")
  static createCpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
