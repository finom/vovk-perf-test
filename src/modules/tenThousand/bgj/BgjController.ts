import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgj")
export default class BgjController {
  @operation({
    summary: "Get Bgj",
  })
  @get()
  static getBgj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgj",
  })
  @post("{id}")
  static createBgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
