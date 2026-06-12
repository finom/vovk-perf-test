import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bci")
export default class BciController {
  @operation({
    summary: "Get Bci",
  })
  @get()
  static getBci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bci",
  })
  @post("{id}")
  static createBci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
