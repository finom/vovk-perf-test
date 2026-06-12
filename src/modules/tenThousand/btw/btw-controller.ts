import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btw")
export default class BtwController {
  @operation({
    summary: "Get Btw",
  })
  @get()
  static getBtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btw",
  })
  @post("{id}")
  static createBtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
