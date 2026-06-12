import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kht")
export default class KhtController {
  @operation({
    summary: "Get Kht",
  })
  @get()
  static getKht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kht",
  })
  @post("{id}")
  static createKht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
