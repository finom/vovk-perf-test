import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfv")
export default class BfvController {
  @operation({
    summary: "Get Bfv",
  })
  @get()
  static getBfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfv",
  })
  @post("{id}")
  static createBfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
