import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ker")
export default class KerController {
  @operation({
    summary: "Get Ker",
  })
  @get()
  static getKer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ker",
  })
  @post("{id}")
  static createKer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
