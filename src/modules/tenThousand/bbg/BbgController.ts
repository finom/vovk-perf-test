import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbg")
export default class BbgController {
  @operation({
    summary: "Get Bbg",
  })
  @get()
  static getBbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbg",
  })
  @post("{id}")
  static createBbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
