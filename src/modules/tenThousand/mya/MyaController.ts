import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mya")
export default class MyaController {
  @operation({
    summary: "Get Mya",
  })
  @get()
  static getMya = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mya",
  })
  @post("{id}")
  static createMya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
