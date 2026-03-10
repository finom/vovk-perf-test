import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bob")
export default class BobController {
  @operation({
    summary: "Get Bob",
  })
  @get()
  static getBob = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bob",
  })
  @post("{id}")
  static createBob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
