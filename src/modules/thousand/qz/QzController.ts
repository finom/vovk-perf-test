import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qz")
export default class QzController {
  @operation({
    summary: "Get Qz",
  })
  @get()
  static getQz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qz",
  })
  @post("{id}")
  static createQz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
