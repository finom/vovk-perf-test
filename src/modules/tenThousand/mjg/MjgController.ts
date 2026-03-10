import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjg")
export default class MjgController {
  @operation({
    summary: "Get Mjg",
  })
  @get()
  static getMjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjg",
  })
  @post("{id}")
  static createMjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
