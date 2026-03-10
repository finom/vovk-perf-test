import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buh")
export default class BuhController {
  @operation({
    summary: "Get Buh",
  })
  @get()
  static getBuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Buh",
  })
  @post("{id}")
  static createBuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
