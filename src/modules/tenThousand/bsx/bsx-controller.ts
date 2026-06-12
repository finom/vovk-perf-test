import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsx")
export default class BsxController {
  @operation({
    summary: "Get Bsx",
  })
  @get()
  static getBsx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsx",
  })
  @post("{id}")
  static createBsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
