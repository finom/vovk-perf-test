import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qg")
export default class QgController {
  @operation({
    summary: "Get Qg",
  })
  @get()
  static getQg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qg",
  })
  @post("{id}")
  static createQg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
