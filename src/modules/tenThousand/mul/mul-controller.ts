import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mul")
export default class MulController {
  @operation({
    summary: "Get Mul",
  })
  @get()
  static getMul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mul",
  })
  @post("{id}")
  static createMul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
