import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bc")
export default class BcController {
  @operation({
    summary: "Get Bc",
  })
  @get()
  static getBc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bc",
  })
  @post("{id}")
  static createBc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
