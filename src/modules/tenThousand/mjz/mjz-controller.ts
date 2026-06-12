import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjz")
export default class MjzController {
  @operation({
    summary: "Get Mjz",
  })
  @get()
  static getMjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjz",
  })
  @post("{id}")
  static createMjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
