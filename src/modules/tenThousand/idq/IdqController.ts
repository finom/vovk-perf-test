import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idq")
export default class IdqController {
  @operation({
    summary: "Get Idq",
  })
  @get()
  static getIdq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idq",
  })
  @post("{id}")
  static createIdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
