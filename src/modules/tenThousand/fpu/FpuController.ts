import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpu")
export default class FpuController {
  @operation({
    summary: "Get Fpu",
  })
  @get()
  static getFpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpu",
  })
  @post("{id}")
  static createFpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
