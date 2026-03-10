import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpu")
export default class GpuController {
  @operation({
    summary: "Get Gpu",
  })
  @get()
  static getGpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpu",
  })
  @post("{id}")
  static createGpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
