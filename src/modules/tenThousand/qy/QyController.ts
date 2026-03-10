import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qy")
export default class QyController {
  @operation({
    summary: "Get Qy",
  })
  @get()
  static getQy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qy",
  })
  @post("{id}")
  static createQy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
