import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqd")
export default class KqdController {
  @operation({
    summary: "Get Kqd",
  })
  @get()
  static getKqd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqd",
  })
  @post("{id}")
  static createKqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
