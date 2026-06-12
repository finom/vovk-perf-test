import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmn")
export default class KmnController {
  @operation({
    summary: "Get Kmn",
  })
  @get()
  static getKmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmn",
  })
  @post("{id}")
  static createKmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
