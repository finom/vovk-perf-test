import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbq")
export default class BbqController {
  @operation({
    summary: "Get Bbq",
  })
  @get()
  static getBbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbq",
  })
  @post("{id}")
  static createBbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
