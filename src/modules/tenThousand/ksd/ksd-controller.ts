import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksd")
export default class KsdController {
  @operation({
    summary: "Get Ksd",
  })
  @get()
  static getKsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksd",
  })
  @post("{id}")
  static createKsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
