import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqb")
export default class BqbController {
  @operation({
    summary: "Get Bqb",
  })
  @get()
  static getBqb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqb",
  })
  @post("{id}")
  static createBqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
