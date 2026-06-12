import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebd")
export default class EbdController {
  @operation({
    summary: "Get Ebd",
  })
  @get()
  static getEbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebd",
  })
  @post("{id}")
  static createEbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
