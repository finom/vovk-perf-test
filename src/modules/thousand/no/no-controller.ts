import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("no")
export default class NoController {
  @operation({
    summary: "Get No",
  })
  @get()
  static getNo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create No",
  })
  @post("{id}")
  static createNo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
