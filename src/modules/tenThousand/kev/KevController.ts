import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kev")
export default class KevController {
  @operation({
    summary: "Get Kev",
  })
  @get()
  static getKev = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kev",
  })
  @post("{id}")
  static createKev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
