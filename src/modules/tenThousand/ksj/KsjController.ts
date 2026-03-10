import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksj")
export default class KsjController {
  @operation({
    summary: "Get Ksj",
  })
  @get()
  static getKsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksj",
  })
  @post("{id}")
  static createKsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
