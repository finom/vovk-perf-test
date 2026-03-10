import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxu")
export default class BxuController {
  @operation({
    summary: "Get Bxu",
  })
  @get()
  static getBxu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxu",
  })
  @post("{id}")
  static createBxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
