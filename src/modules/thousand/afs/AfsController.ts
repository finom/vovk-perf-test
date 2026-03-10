import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afs")
export default class AfsController {
  @operation({
    summary: "Get Afs",
  })
  @get()
  static getAfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afs",
  })
  @post("{id}")
  static createAfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
