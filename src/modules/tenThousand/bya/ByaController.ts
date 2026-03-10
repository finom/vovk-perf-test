import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bya")
export default class ByaController {
  @operation({
    summary: "Get Bya",
  })
  @get()
  static getBya = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bya",
  })
  @post("{id}")
  static createBya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
