import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpu")
export default class MpuController {
  @operation({
    summary: "Get Mpu",
  })
  @get()
  static getMpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpu",
  })
  @post("{id}")
  static createMpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
