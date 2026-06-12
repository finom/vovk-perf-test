import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyt")
export default class DytController {
  @operation({
    summary: "Get Dyt",
  })
  @get()
  static getDyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyt",
  })
  @post("{id}")
  static createDyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
