import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("net")
export default class NetController {
  @operation({
    summary: "Get Net",
  })
  @get()
  static getNet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Net",
  })
  @post("{id}")
  static createNet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
