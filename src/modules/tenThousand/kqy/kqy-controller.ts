import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqy")
export default class KqyController {
  @operation({
    summary: "Get Kqy",
  })
  @get()
  static getKqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqy",
  })
  @post("{id}")
  static createKqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
