import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmj")
export default class BmjController {
  @operation({
    summary: "Get Bmj",
  })
  @get()
  static getBmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bmj",
  })
  @post("{id}")
  static createBmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
