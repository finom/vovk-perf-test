import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqu")
export default class BquController {
  @operation({
    summary: "Get Bqu",
  })
  @get()
  static getBqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqu",
  })
  @post("{id}")
  static createBqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
