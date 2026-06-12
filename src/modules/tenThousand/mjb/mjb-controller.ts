import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjb")
export default class MjbController {
  @operation({
    summary: "Get Mjb",
  })
  @get()
  static getMjb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjb",
  })
  @post("{id}")
  static createMjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
