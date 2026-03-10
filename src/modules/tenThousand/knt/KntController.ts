import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knt")
export default class KntController {
  @operation({
    summary: "Get Knt",
  })
  @get()
  static getKnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knt",
  })
  @post("{id}")
  static createKnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
